import { WHATSAPP_NUMBER } from '../config/site';

/** Monta https://wa.me/<número>?text=<mensagem codificada>. Sem mensagem, devolve só o link do número. */
export function whatsappUrl(message?: string, number: string = WHATSAPP_NUMBER): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Substitui marcadores {chave} de um template (ex.: "{modelo}") pelos valores informados. */
export function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => values[k] ?? m);
}

/** Link da mensagem padrão da variante (copy.whatsapp.defaultMessage). */
export function defaultWhatsappUrl(copy: { whatsapp: { defaultMessage: string } }): string {
  return whatsappUrl(copy.whatsapp.defaultMessage);
}
