// Verificação do HTML gerado (rode depois de `npm run build`): node scripts/verify-dist.mjs
// 1) nenhum texto "A CONFIRMAR" nem campo de controle da copy no HTML; 2) noindex em todas as rotas;
// 3) números da tabela HTC (03/05/09 AR) iguais aos de src/data/chillers-htc.json; 4) alt e h1.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const files = fs.readdirSync(dist, { recursive: true }).filter((f) => String(f).endsWith('.html')).map((f) => path.join(dist, String(f)));
const html = Object.fromEntries(files.map((f) => [path.relative(dist, f), fs.readFileSync(f, 'utf8')]));
const json = JSON.parse(fs.readFileSync(fileURLToPath(new URL('../src/data/chillers-htc.json', import.meta.url)), 'utf8'));
const nf = new Intl.NumberFormat('pt-BR');
let fails = 0;
const bad = (m) => { fails++; console.log('FALHA', m); };

const forbidden = ['A CONFIRMAR', 'CONFIRMAR', 'claimsToConfirm', 'pending', 'Para o front-end', 'sizing.omit', 'mergeInto', 'specsStatus',
  'Capacidade: informe o seu ambiente e a gente indica', 'Dimensionamento gratuito', 'faturamento facilitado', 'economia de até 40', '4,5 L/kWh', '50+ anos', 'Helinterm', 'undefined', '[object', 'NaN'];
for (const [f, h] of Object.entries(html)) for (const t of forbidden) if (h.toLowerCase().includes(t.toLowerCase())) bad(`${f}: contém "${t}"`);
// campo "variant" só como atributo data- e input oculto
for (const [f, h] of Object.entries(html)) if (!/<meta name="robots" content="noindex/.test(h)) bad(`${f}: sem noindex`);
for (const [f, h] of Object.entries(html)) { const n = (h.match(/<h1[\s>]/g) || []).length; if (n !== 1) bad(`${f}: ${n} h1`); if (!/<html lang="pt-BR"/.test(h)) bad(`${f}: lang`); }
for (const [f, h] of Object.entries(html)) { const imgs = h.match(/<img[^>]*>/g) || []; for (const i of imgs) { if (!/\balt\b/.test(i)) bad(`${f}: img sem alt`); } }

// tabela HTC: cada número do JSON precisa aparecer nas páginas que têm a tabela
const rows = {
  capacidade: (m) => `${nf.format(m.capacidadeMin)} a ${nf.format(m.capacidadeMax)}`,
  cop: (m) => m.cop,
  vazao: (m) => m.vazaoRequerida,
  potenciaRegime: (m) => m.potenciaRegime,
  peso: (m) => m.peso.replace('Kg', 'kg'),
  dimensoes: (m) => m.dimensoes,
};
let checked = 0;
for (const [f, h] of Object.entries(html)) {
  if (!h.includes('class="spec')) continue;
  const tbl = h.slice(h.indexOf('<table'), h.indexOf('</table>'));
  for (const name of ['HTC 03 AR', 'HTC 05 AR', 'HTC 09 AR']) {
    if (!tbl.includes(`>${name}<`)) bad(`${f}: cabeçalho ${name} ausente`);
  }
  for (const key of Object.keys(rows)) {
    const m = tbl.match(new RegExp(`data-key="${key}"[^>]*>([^<]*)<`, 'g'));
    if (!m) continue;
    const got = m.map((x) => x.replace(/.*>([^<]*)<$/, '$1'));
    const want = ['HTC 03 AR', 'HTC 05 AR', 'HTC 09 AR'].map((n) => rows[key](json.find((j) => j.modelo === n)));
    checked++;
    if (JSON.stringify(got) !== JSON.stringify(want)) bad(`${f}: linha ${key}: ${JSON.stringify(got)} != ${JSON.stringify(want)}`);
  }
  if (/HTC 15 AR|HTC 22 AR|HTC 30/.test(tbl)) bad(`${f}: modelo fora de 03/05/09 na tabela`);
}
// âncoras internas precisam existir
for (const [f, h] of Object.entries(html)) {
  const ids = new Set([...h.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of h.matchAll(/href="#([^"]+)"/g)) if (!ids.has(m[1])) bad(`${f}: âncora #${m[1]} sem destino`);
}
console.log(`${Object.keys(html).length} páginas, ${checked} linhas de tabela conferidas com o JSON, ${fails} falha(s).`);
process.exit(fails ? 1 : 0);
