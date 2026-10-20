/**
 * Eventos de conversão (sem GTM/GA, sem cookies).
 * Cada contato dispara CustomEvent('lp:contact') em window e, se existir window.dataLayer, push { event: 'lp_contact', ... }.
 */
export type Channel = 'whatsapp' | 'form';
export interface ContactDetail { variant: string; channel: Channel; place: string; model: string }

export function trackContact(d: Partial<ContactDetail> & { channel: Channel }): void {
  const detail: ContactDetail = {
    variant: d.variant || document.body.dataset.variant || '',
    channel: d.channel,
    place: d.place || '',
    model: d.model || '',
  };
  try {
    window.dispatchEvent(new CustomEvent('lp:contact', { detail }));
    const dl = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
    if (Array.isArray(dl)) dl.push({ event: 'lp_contact', ...detail });
  } catch {
    /* medir nunca pode atrapalhar o contato */
  }
}

/**
 * Delegação de cliques nos links de WhatsApp (a[data-wa]). Não chama preventDefault: a navegação segue normal.
 * Botões [data-wa-href] (seleção do guia do v3) NÃO contam: só escolhem a opção; o contato é o clique no link do resultado.
 */
const onClick = (e: MouseEvent) => {
  if (e.button > 1) return;
  const el = (e.target as Element | null)?.closest?.('a[data-wa]') as HTMLElement | null;
  if (!el) return;
  trackContact({ channel: 'whatsapp', place: el.dataset.waPlace, model: el.dataset.model });
};
const w = window as unknown as { __lpTrack?: boolean };
if (!w.__lpTrack) {
  w.__lpTrack = true;
  document.addEventListener('click', onClick, true);
  document.addEventListener('auxclick', onClick, true);
}
