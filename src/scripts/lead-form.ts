/**
 * Envio do formulário de contato (sem dependências).
 * Com data-form-endpoint: POST JSON (10 s) · sem endpoint: abre o WhatsApp com os dados · sempre: honeypot, validação pt-BR, eventos.
 * Todo texto do usuário entra no DOM só por textContent e na URL só por encodeURIComponent.
 */
import { trackContact } from './track';

const TIMEOUT_MS = 10_000;
const TRACKING_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'] as const;
const FIELD_ORDER = ['name', 'company', 'phone', 'email', 'product', 'application'] as const;
type Key = (typeof FIELD_ORDER)[number];
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const MSG: Record<Key, string> = {
  name: 'Informe o seu nome.',
  company: 'Informe o nome da empresa.',
  phone: 'Informe um telefone com DDD, por exemplo (11) 94051-8767.',
  email: 'Informe um e-mail válido, por exemplo nome@empresa.com.br.',
  product: 'Escolha uma opção.',
  application: 'Conte a sua aplicação ou a carga que precisa atender.',
};
const LABEL: Record<Key, string> = {
  name: 'Nome', company: 'Empresa', phone: 'Telefone', email: 'E-mail', product: 'Produto de interesse', application: 'Aplicação/carga',
};

/** Remove DDI 55, zero de operadora e formatação. Devolve só dígitos ou '' se não for um telefone brasileiro válido. */
export function normalizePhone(raw: string): string {
  let d = raw.replace(/\D/g, '');
  if ((d.length === 12 || d.length === 13) && d.startsWith('55')) d = d.slice(2);
  else if (d.length === 12 && d.startsWith('0')) d = d.slice(1);
  if (d.length !== 10 && d.length !== 11) return '';
  if (!/^[1-9][1-9]/.test(d)) return '';
  if (d.length === 11 && d[2] !== '9') return '';
  return d;
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

function trackingParams(): Record<string, string> {
  const out: Record<string, string> = {};
  const q = new URLSearchParams(location.search);
  for (const k of TRACKING_KEYS) {
    const v = q.get(k);
    if (v) out[k] = v.slice(0, 200);
  }
  return out;
}

function init(form: HTMLFormElement) {
  const variant = form.dataset.variant ?? '';
  const endpoint = (form.dataset.formEndpoint ?? '').trim();
  const waBase = form.dataset.waBase ?? '';
  const waMessage = form.dataset.waMessage ?? '';
  const place = form.id || 'form';
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const okEl = form.querySelector<HTMLElement>('[data-form-status="success"]')!;
  const errEl = form.querySelector<HTMLElement>('[data-form-status="error"]')!;
  const waEl = form.querySelector<HTMLElement>('[data-form-status="whatsapp"]')!;
  const waText = waEl.querySelector<HTMLElement>('[data-wa-text]')!;
  const waLink = waEl.querySelector<HTMLAnchorElement>('a')!;
  const btnLabel = btn.textContent ?? '';
  let busy = false;

  const control = (k: Key) => form.elements.namedItem(k) as Control | null;
  const errorOf = (c: Control) => document.getElementById(`${c.id}-error`);
  const value = (k: Key) => (control(k)?.value ?? '').trim();

  const clearError = (c: Control) => {
    c.removeAttribute('aria-invalid');
    c.removeAttribute('aria-describedby');
    const e = errorOf(c);
    if (e) { e.hidden = true; e.textContent = ''; }
  };
  const setError = (c: Control, text: string) => {
    c.setAttribute('aria-invalid', 'true');
    const e = errorOf(c);
    if (e) { e.textContent = text; e.hidden = false; c.setAttribute('aria-describedby', e.id); }
  };
  const hideStatus = () => { okEl.hidden = true; errEl.hidden = true; waEl.hidden = true; };

  form.addEventListener('input', (ev) => {
    const t = ev.target as Control;
    if (t.getAttribute?.('aria-invalid')) clearError(t);
  });

  function validate(): Key | null {
    let first: Key | null = null;
    for (const k of FIELD_ORDER) {
      const c = control(k);
      if (!c) continue;
      clearError(c);
      const v = c.value.trim();
      const required = c.required || c.getAttribute('aria-required') === 'true';
      let bad = false;
      if (k === 'phone') bad = required || v ? !normalizePhone(v) : false;
      else if (k === 'email') bad = v ? !isEmail(v) : required;
      else bad = required && !v;
      if (bad) { setError(c, MSG[k]); first ??= k; }
    }
    return first;
  }

  function collect(): Record<string, string> {
    const data: Record<string, string> = {};
    for (const k of FIELD_ORDER) {
      const v = value(k);
      if (!v) continue;
      data[k] = k === 'phone' ? normalizePhone(v) : v.slice(0, 2000);
    }
    return data;
  }

  /** Mensagem do WhatsApp com os dados do formulário. Sempre termina com a referência "(ref. vN)". */
  function buildMessage(data: Record<string, string>): string {
    const lines = [waMessage.trim()];
    const add = (k: Key) => { if (data[k]) lines.push(`${LABEL[k]}: ${k === 'application' ? data[k].slice(0, 800) : data[k]}`); };
    (['name', 'company', 'phone', 'email', 'application', 'product'] as const).forEach(add);
    let msg = lines.filter(Boolean).join('\n');
    const ref = `(ref. ${variant})`;
    if (!msg.includes(ref)) msg += `\n${ref}`;
    return msg;
  }
  const waUrl = (msg: string) => (waBase.startsWith('https://wa.me/') ? `${waBase}?text=${encodeURIComponent(msg)}` : '');

  function setBusy(on: boolean) {
    busy = on;
    btn.setAttribute('aria-disabled', String(on));
    btn.classList.toggle('is-busy', on);
    form.setAttribute('aria-busy', String(on));
    btn.textContent = on ? 'Enviando...' : btnLabel;
  }

  function showWhatsApp(url: string, text: string, linkLabel: string) {
    waText.textContent = text;
    waLink.textContent = linkLabel;
    waLink.href = url;
    waEl.hidden = false;
  }

  function openWhatsApp(url: string): boolean {
    if (!url) return false;
    const w = window.open(url, '_blank');
    if (!w) return false;
    try { w.opener = null; } catch { /* noopener manual */ }
    return true;
  }

  function fakeSuccess() {
    okEl.hidden = false;
    form.reset();
  }

  async function sendToEndpoint(data: Record<string, string>) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    const payload = {
      variant,
      ...data,
      page: location.pathname,
      referrer: document.referrer || '',
      ...trackingParams(),
      timestamp: new Date().toISOString(),
    };
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
        referrerPolicy: 'no-referrer',
        credentials: 'omit',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      okEl.hidden = false;
      form.reset();
      trackContact({ variant, channel: 'form', place });
    } catch {
      errEl.hidden = false;
      const url = waUrl(buildMessage(data));
      if (url) showWhatsApp(url, 'Prefere falar agora? Envie os mesmos dados pelo WhatsApp.', 'Enviar pelo WhatsApp');
      waLink.dataset.wa = '';
      waLink.dataset.waPlace = 'form-fallback';
    } finally {
      clearTimeout(timer);
      setBusy(false);
    }
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (busy) return;
    hideStatus();
    const hp = form.elements.namedItem('hp_url') as HTMLInputElement | null;
    if (hp && hp.value) { fakeSuccess(); return; }
    const firstBad = validate();
    if (firstBad) { control(firstBad)?.focus(); return; }
    const data = collect();
    if (endpoint) {
      setBusy(true);
      void sendToEndpoint(data);
      return;
    }
    // Sem endpoint: abre o WhatsApp a partir do gesto do usuário (evita bloqueio de pop-up)
    const url = waUrl(buildMessage(data));
    const opened = openWhatsApp(url);
    showWhatsApp(
      url,
      opened ? 'Abrimos o WhatsApp com os seus dados. Se a conversa não abriu, use o link:' : 'O navegador bloqueou a nova aba. Toque no link para abrir o WhatsApp com os seus dados:',
      'Abrir o WhatsApp',
    );
    trackContact({ variant, channel: 'form', place });
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach(init);
