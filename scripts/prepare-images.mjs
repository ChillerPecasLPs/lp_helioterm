// Gera as imagens-base em src/assets a partir de materiais/ (somente leitura).
// Uso: node scripts/prepare-images.mjs
// O Astro (astro:assets) gera depois as versões WebP responsivas no build.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const M = 'materiais';
const out = 'src/assets';
await mkdir(`${out}/photos`, { recursive: true });
await mkdir(`${out}/renders`, { recursive: true });

const jobs = [
  // Fotos reais de fábrica
  [`${M}/fotos-convertidas/IMG_3926.jpg`, 'photos/fabrica-chiller-frente.jpg', { w: 2400 }],
  [`${M}/fotos-convertidas/IMG_3927.jpg`, 'photos/fabrica-chiller-lateral.jpg', { w: 2400 }],
  [`${M}/fotos-convertidas/IMG_3929.jpg`, 'photos/fabrica-ventilador.jpg', { w: 2400 }],
  // IMG_3925: recorte abaixo da linha do fundo, onde aparece um equipamento com a grafia "Helinterm".
  [`${M}/fotos-convertidas/IMG_3925.jpg`, 'photos/fabrica-painel.jpg', { crop: { top: 0.47 }, w: 1800 }],
  [`${M}/htc-3-5-e-9/WhatsApp Image 2026-10-06 at 13.57.34.jpeg`, 'photos/chiller-rodas.jpg', { w: 1400 }],
  [`${M}/htc-3-5-e-9/WhatsApp Image 2026-10-06 at 13.57.35.jpeg`, 'photos/chiller-parede.jpg', { w: 1600 }],
  [`${M}/htc-3-5-e-9/WhatsApp Image 2026-10-06 at 13.57.36.jpeg`, 'photos/chiller-conexoes.jpg', { w: 1600 }],
  [`${M}/htc-3-5-e-9/ce7a7d69-9dd1-4bbc-9766-04bf470ae5f5.JPG`, 'photos/chiller-aberto.jpg', { w: 1200 }],
  // Renders (parecem gerados por IA: uso a confirmar com o cliente)
  [`${M}/htc-3-5-e-9/A6DF37DB-53A8-4A20-BAFA-06CF70852192.PNG`, 'renders/chiller-render-frente.jpg', { w: 1086 }],
  [`${M}/htc-3-5-e-9/F58B630C-4B98-478E-92BD-3F21CB9F8D8E.PNG`, 'renders/chiller-render-galpao.jpg', { w: 1448 }],
];
for (const [src, dst, o] of jobs) {
  let img = sharp(src).rotate();
  if (o.crop) {
    const m = await img.metadata();
    const top = Math.round(m.height * o.crop.top);
    img = sharp(await img.toBuffer()).extract({ left: 0, top, width: m.width, height: m.height - top });
  }
  await img.resize({ width: o.w, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(`${out}/${dst}`);
  console.log('ok', dst);
}
// PNG dos desumidificadores: copiados como estão (sem e com fundo).
const png = [
  [`${M}/dutados/desumidificador_duto_helioterm-removebg-preview.png`, 'renders/dutado-semfundo.png'],
  [`${M}/dutados/desumidificador_duto_helioterm.png`, 'renders/dutado.png'],
  [`${M}/portateis/QDWckkeAKgzjSUAn-removebg-preview.png`, 'renders/portatil-semfundo.png'],
  [`${M}/portateis/QDWckkeAKgzjSUAn.png`, 'renders/portatil.png'],
];
for (const [s, d] of png) { await sharp(s).toFile(`${out}/${d}`); console.log('ok', d); }
