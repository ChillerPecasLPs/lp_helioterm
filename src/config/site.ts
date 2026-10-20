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
export const EMAIL: string = 'vendas@chillerpecas.com';
export const PHONE: string = '';
export const ADDRESS: string = 'R. Antônio de Barros, 1093, Tatuapé, São Paulo - SP, 03401-000';

/**
 * Webhook do CRM (Hablla) que recebe o formulário. A variável PUBLIC_FORM_ENDPOINT, se definida, tem prioridade.
 * Vazio = o formulário abre o WhatsApp com os dados. O endereço fica visível no HTML/JS do site.
 */
const HABLLA_WEBHOOK = 'https://webhook.hablla.com/v1/6ad7709763bdc0b5c93d1eca';
export const FORM_ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT ?? HABLLA_WEBHOOK;

/** false = todas as páginas saem com <meta name="robots" content="noindex">. Mude para true só no lançamento. */
export const INDEXABLE = false;

export const SITE_LANG = 'pt-BR';
