/**
 * Configuração do site. Valores marcados com PLACEHOLDER dependem do cliente.
 * O agente de integração (e o cliente) preenchem este arquivo; as páginas só leem daqui.
 */
export const BRAND = 'Chiller Peças';
export const MAKER = 'Helioterm';
export const SLOGAN = 'Peça com agilidade. Chiller Peças.';

/** PLACEHOLDER: número do WhatsApp comercial, só dígitos com DDI e DDD (ex.: 5511999999999). */
export const WHATSAPP_NUMBER = '5500000000000';

/** PLACEHOLDERS: contatos da Chiller Peças (vazios até o cliente confirmar; o rodapé só exibe o que estiver preenchido). */
export const EMAIL: string = '';
export const PHONE: string = '';
export const ADDRESS: string = '';

/** Endpoint do formulário (variável PUBLIC_FORM_ENDPOINT). Vazio = o agente 5 aplica o fallback pelo WhatsApp. */
export const FORM_ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';

/** false = todas as páginas saem com <meta name="robots" content="noindex">. Mude para true só no lançamento. */
export const INDEXABLE = false;

export const SITE_LANG = 'pt-BR';
