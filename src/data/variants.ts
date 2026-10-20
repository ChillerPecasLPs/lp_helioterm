/** Resumo dos cinco modelos para a página interna de comparação (fonte: comentários no topo de cada copy.vN.ts). */
import { copy as c1 } from '../content/copy.v1';
import { copy as c2 } from '../content/copy.v2';
import { copy as c3 } from '../content/copy.v3';
import { copy as c4 } from '../content/copy.v4';
import { copy as c5 } from '../content/copy.v5';

export const variants = [
  {
    id: 'v1', href: '/v1', name: 'Parada custa caro',
    angle: 'O custo de deixar o processo sem controle térmico: máquina parada, produto fora do ponto, sem prazo nem número inventado.',
    trigger: 'Aversão à perda',
    layout: 'Hero azul escuro com título gigante em Anton, palco de foto fixo que troca por seção, seção de dor antes da solução e dos HTC.',
    headline: c1.hero.headline, cta: c1.hero.primaryCta,
  },
  {
    id: 'v2', href: '/v2', name: 'Dimensionamento consultivo',
    angle: 'Mostrar o que define o chiller certo antes de pedir qualquer coisa. Formulário de 4 campos já no hero.',
    trigger: 'Autoridade técnica e reciprocidade',
    layout: 'Hero dividido: a pergunta à esquerda, formulário curto à direita; checklist, faixas de capacidade e formulário final.',
    headline: c2.hero.headline, cta: c2.heroForm.submit,
  },
  {
    id: 'v3', href: '/v3', name: 'Escolha guiada',
    angle: 'O visitante escolhe o caso e recebe a indicação preliminar, em passos curtos, com a mensagem de WhatsApp pronta.',
    trigger: 'Compromisso e consistência, efeito Zeigarnik',
    layout: 'Cartaz de cor chapada com seletor em passos no hero; funciona sem JavaScript (opções viram links do WhatsApp).',
    headline: c3.hero.headline, cta: c3.hero.primaryCta,
  },
  {
    id: 'v4', href: '/v4', name: 'Produto em evidência',
    angle: 'Números reais do fabricante, lado a lado, com um pedido por modelo.',
    trigger: 'Prova concreta e especificidade',
    layout: 'Foto real de fábrica no hero, comparador dos três HTC (8 linhas no celular com "Ver mais"), CTA por modelo e desumidificadores à parte.',
    headline: c4.hero.headline, cta: c4.hero.primaryCta,
  },
  {
    id: 'v5', href: '/v5', name: 'Conversa direta',
    angle: 'Página curta em formato de conversa, tom amigável da marca, mobile primeiro.',
    trigger: 'Proximidade e baixo atrito',
    layout: 'Bolhas de conversa (exemplo rotulado), um único CTA de WhatsApp e o formulário só como alternativa no fim.',
    headline: c5.hero.headline, cta: c5.hero.primaryCta,
  },
] as const;
