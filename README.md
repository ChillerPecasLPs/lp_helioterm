# Landing pages Chiller Peças (modelos v1 a v5)

Cinco modelos de landing page em Astro (pt-BR, saída estática), todos com o mesmo objetivo: gerar contato por WhatsApp ou formulário. A página `/` é uma comparação interna (noindex) para escolher o que testar.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check (0 erros/avisos esperados) + build em dist/
npm run preview    # serve o dist/ já gerado
node scripts/verify-dist.mjs   # confere o HTML gerado (noindex, h1, tabela HTC x JSON)
node scripts/contrast.mjs      # confere contrastes (único par que falha, documentado: laranja do botão sobre branco, 3:1 como elemento)
```

Rotas: `/v1` a `/v5` (modelos) e `/` (comparação interna). O formulário aponta para a política de privacidade do site da Chiller Peças (https://www.chillerpecas.com.br/politica-de-privacidade).

## O que mudar em `src/config/site.ts`

- `WHATSAPP_NUMBER`: só dígitos com DDI e DDD (hoje `5511940518767`).
- `EMAIL`, `PHONE`, `ADDRESS`: aparecem no rodapé (o que estiver vazio não aparece).
- `FORM_ENDPOINT`: vem da variável `PUBLIC_FORM_ENDPOINT` (ver abaixo).
- `INDEXABLE`: `false` coloca `noindex` em todas as páginas. Mude para `true` só no lançamento (`/` continua noindex).

Textos de cada modelo: `src/content/copy.v1.ts` a `copy.v5.ts`. Tabela do chiller HTC: `src/data/chillers-htc.json` (o build confere os números).

## Formulário: `PUBLIC_FORM_ENDPOINT`

Copie `.env.example` para `.env` (ou defina a variável no host) e **rode o build de novo**: a variável é lida na hora do build.

- **Vazio (estado atual):** ao enviar, o formulário valida e abre o WhatsApp (`wa.me/5511940518767`) com uma mensagem com nome, empresa, telefone, e-mail, aplicação, produto e a referência `(ref. vN)`. Nada vai para servidor. Se o navegador bloquear a nova aba, aparece o link.
- **Preenchido:** `POST` com `Content-Type: application/json` (tempo limite de 10 s). Em 2xx mostra o sucesso e limpa o formulário. Em erro ou timeout mostra o erro e um link para enviar os mesmos dados pelo WhatsApp (o que o usuário digitou é mantido).

Exemplo do JSON enviado (campos vazios são omitidos; telefone normalizado só com dígitos, sem DDI):

```json
{
  "variant": "v2",
  "name": "Maria Silva",
  "company": "Acme Ltda",
  "phone": "11940518767",
  "email": "maria@acme.com.br",
  "product": "Chiller compacto HTC 05 AR",
  "application": "Injetora de 20 TR, água a 12 °C",
  "page": "/v2",
  "referrer": "https://www.google.com/",
  "utm_source": "google", "utm_medium": "cpc", "utm_campaign": "chiller",
  "utm_term": "...", "utm_content": "...", "gclid": "...", "fbclid": "...",
  "timestamp": "2026-10-20T13:26:09.691Z"
}
```

Não enviamos IP, user agent nem cookies. O destino precisa responder 2xx e liberar CORS para o domínio da página (`Access-Control-Allow-Origin`, `Access-Control-Allow-Headers: content-type, accept`, resposta ao `OPTIONS`).

Exemplos de destino que aceitam `POST` com corpo JSON: Formspree (`https://formspree.io/f/<id>`), webhooks do Make, Zapier ou n8n, ou uma função serverless própria (por exemplo na Vercel) que valide e encaminhe para o CRM. O navegador envia `Content-Type: application/json`, o que dispara um preflight `OPTIONS`: **confirme o CORS do endpoint para o domínio da página**. Google Apps Script não responde ao preflight e não serve direto (exigiria corpo `text/plain`, que este formulário não usa).

O endpoint fica visível no HTML e no JS da página. Um webhook aberto (Make, Zapier) aceita spam de qualquer pessoa, e o honeypot é a única barreira no navegador. Prefira um endpoint com validação e limite de taxa.

O honeypot (`hp_url`) é um campo oculto fora da tela: se vier preenchido, o envio é descartado em silêncio.

## Como medir o teste A/B

Cada contato carrega a variante:

- **Eventos no navegador:** `window` recebe `CustomEvent('lp:contact')` com `detail = { variant, channel, place, model }`. Se existir `window.dataLayer`, também recebe `{ event: 'lp_contact', variant, channel, place, model }` (use como gatilho no GTM, GA4 ou Meta quando o cliente instalar a tag; o site não instala nenhuma). `channel` é `whatsapp` (clique em link) ou `form` (envio aceito, ou WhatsApp aberto pelo formulário); `place` diz qual botão (`header`, `hero`, `float`, `form`, `guide-result`, `model-HTC 05 AR`...); `model` vem dos botões por modelo do v4.
- **Mensagem do WhatsApp:** toda mensagem termina com `(ref. vN)`.
- **Payload do formulário:** campo `variant`.

Compare o número de contatos por variante com o número de visitas de cada uma (as visitas vêm da ferramenta de análise do cliente, filtrando por `/v1` a `/v5`). Sugestão: divida o tráfego pago entre as páginas por anúncio ou grupo de anúncios.

## Pendências do cliente

- Especificações do desumidificador dutado e do portátil (a copy não afirma números).
- Endpoint do formulário (`PUBLIC_FORM_ENDPOINT`) e o serviço que o recebe.
- Confirmar os itens de `claimsToConfirm` em cada `src/content/copy*.ts` (prazos, frete, dimensionamento sem custo, números de eficiência etc.).
- Autorização de uso dos renders e das fotos.
- Ativar `INDEXABLE = true` no lançamento.
- Definir `site` em `astro.config.mjs` (URL canônica).
- Criar página 404, `robots.txt` e Open Graph (imagem de prévia para o WhatsApp).

## Publicar

O build gera um site estático em `dist/`. Sirva em qualquer host estático (Nginx, S3, Netlify, GitHub Pages) ou na Vercel (framework Astro, comando `npm run build`, pasta `dist`). Defina `PUBLIC_FORM_ENDPOINT` no ambiente do build.
