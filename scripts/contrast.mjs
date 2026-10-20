// Verifica as razões de contraste WCAG dos pares de cor usados. Uso: node scripts/contrast.mjs
const L = (h) => { const c = [1,3,5].map(i => parseInt(h.slice(i,i+2),16)/255).map(v => v<=0.03928 ? v/12.92 : ((v+0.055)/1.055)**2.4); return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]; };
export const ratio = (a,b) => { const [x,y] = [L(a),L(b)].sort((p,q)=>q-p); return (x+0.05)/(y+0.05); };
export const pairs = [
  ['Texto branco sobre azul escuro (hero, rodapé, faixas)', '#ffffff', '#085ba7', 4.5],
  ['Texto tinta sobre branco (corpo)', '#0a2238', '#ffffff', 4.5],
  ['Texto tinta sobre cinza #efefef (corpo)', '#0a2238', '#efefef', 4.5],
  ['Texto suave sobre branco', '#44566a', '#ffffff', 4.5],
  ['Texto suave sobre cinza #efefef', '#44566a', '#efefef', 4.5],
  ['Texto azul escuro sobre branco (links, títulos)', '#085ba7', '#ffffff', 4.5],
  ['Texto azul escuro sobre cinza #efefef', '#085ba7', '#efefef', 4.5],
  ['Texto tinta sobre laranja (botão CTA)', '#0a2238', '#ff901c', 4.5],
  ['Texto tinta profunda sobre azul claro #108bd1 (fundos grandes)', '#031a2e', '#108bd1', 4.5],
  ['Texto branco sobre azul claro (só texto grande 3:1)', '#ffffff', '#108bd1', 3],
  ['Laranja (botão) sobre azul escuro (contraste do elemento)', '#ff901c', '#085ba7', 3],
  ['Laranja (botão) sobre tinta', '#ff901c', '#0a2238', 3],
  ['Laranja (botão) sobre branco (elemento, 3:1)', '#ff901c', '#ffffff', 3],
  ['Texto branco sobre tinta', '#ffffff', '#0a2238', 4.5],
  ['Texto cinza claro sobre azul escuro (texto secundário)', '#dbe9f6', '#085ba7', 4.5],
  ['Azul claro sobre tinta (destaque em título grande)', '#108bd1', '#0a2238', 3],
  ['Foco: tinta sobre laranja/branco', '#0a2238', '#ffffff', 3],
  ['Azul pálido sobre tinta profunda (texto secundário em faixas escuras)', '#dbe9f6', '#031a2e', 4.5],
  ['Azul escuro sobre cinza-2 #e1e6eb (títulos v5)', '#085ba7', '#e1e6eb', 4.5],
  ['Texto suave sobre cinza-2', '#44566a', '#e1e6eb', 4.5],
  ['Azul escuro sobre azul pálido #dbe9f6 (títulos v4)', '#085ba7', '#dbe9f6', 4.5],
  ['Tinta sobre azul pálido', '#0a2238', '#dbe9f6', 4.5],
  ['Texto suave sobre branco (nota de formulário)', '#44566a', '#ffffff', 4.5],
  ['Branco sobre azul hover #06487f', '#ffffff', '#06487f', 4.5],
  ['Tinta sobre laranja hover #ffa23f (botão em hover)', '#0a2238', '#ffa23f', 4.5],
  ['Foco branco sobre azul escuro', '#ffffff', '#085ba7', 3],
];
if (process.argv[1]?.endsWith('contrast.mjs')) {
  for (const [n,a,b,min] of pairs) { const r = ratio(a,b); console.log(`${r.toFixed(2).padStart(5)}  ${r>=min?'ok  ':'FALHA'} (mín ${min})  ${n}  ${a} / ${b}`); }
}
