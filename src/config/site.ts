/**
 * Configuração do site. Valores marcados com PLACEHOLDER dependem do cliente.
 * O agente de integração (e o cliente) preenchem este arquivo; as páginas só leem daqui.
 */
export const BRAND = 'Chiller Peças';
export const MAKER = 'Helioterm';
export const SLOGAN = 'Peça com agilidade. Chiller Peças.';

/** Número do WhatsApp comercial (informado pelo cliente), só dígitos com DDI e DDD: +55 (11) 94051-8767. */
export const WHATSAPP_NUMBER = '5511940518767';

/** Contatos da Chiller Peças informados pelo cliente (o rodapé só exibe o que estiver preenchido). */
// CONFIRMAR: o domínio foi enviado como "chilerpecas.com" (um L); o domínio da empresa parece ser "chillerpecas.com".
export const EMAIL: string = 'vendas@chilerpecas.com';
export const PHONE: string = '';
// PENDENTE: cidade, estado e CEP.
export const ADDRESS: string = 'Rua Antônio de Barros, 1093';

/** Endpoint do formulário (variável PUBLIC_FORM_ENDPOINT). Vazio = o agente 5 aplica o fallback pelo WhatsApp. */
export const FORM_ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT ?? '';

/** false = todas as páginas saem com <meta name="robots" content="noindex">. Mude para true só no lançamento. */
export const INDEXABLE = false;

export const SITE_LANG = 'pt-BR';
