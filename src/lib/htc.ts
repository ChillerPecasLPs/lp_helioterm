import raw from '../data/chillers-htc.json';

/** Só os HTC 03, 05 e 09 AR entram nas tabelas (os demais modelos do JSON ficam de fora). */
export const HTC_MODELS = ['HTC 03 AR', 'HTC 05 AR', 'HTC 09 AR'] as const;
export type HtcModel = (typeof HTC_MODELS)[number];

type Raw = (typeof raw)[number];
const nf = new Intl.NumberFormat('pt-BR');

function connection(c: string): string {
  // "1.1/2\" Entrada/Saída" -> "1 1/2\" entrada/saída"
  return c.replace('1.1/2', '1 1/2').replace('Entrada/Saída', 'entrada/saída');
}

/** Valores formatados de cada linha do comparativo, direto de chillers-htc.json. */
export function htcValues(m: Raw): Record<string, string> {
  return {
    capacidade: `${nf.format(m.capacidadeMin)} a ${nf.format(m.capacidadeMax)}`,
    compressor: `${m.tipoCompressor}, ${m.potenciaCompressor} x${m.qtdCompressores}`,
    cop: m.cop,
    refrigerante: m.refrigerante,
    vazao: m.vazaoRequerida,
    pressao: m.pressaoOperacao,
    tensao: m.tensao.replace('3F (220/380/440 VCA)', '3F 220/380/440 V').replace('/60Hz', ', 60 Hz'),
    potenciaInstalada: m.potenciaInstalada,
    potenciaRegime: m.potenciaRegime,
    corrente: m.correnteNominal,
    dimensoes: m.dimensoes,
    peso: m.peso.replace('Kg', 'kg'),
    conexoes: connection(m.conexoes),
  };
}

export const htc = Object.fromEntries(
  HTC_MODELS.map((name) => {
    const m = raw.find((r) => r.modelo === name);
    if (!m) throw new Error(`Modelo ${name} não encontrado em chillers-htc.json`);
    return [name, { ...m, values: htcValues(m) }];
  }),
) as Record<HtcModel, Raw & { values: Record<string, string> }>;

/** Rótulos das linhas na ordem do comparativo. */
export const HTC_ROWS: { key: string; label: string }[] = [
  { key: 'capacidade', label: 'Capacidade frigorífica (kcal/h)' },
  { key: 'compressor', label: 'Compressor' },
  { key: 'cop', label: 'COP' },
  { key: 'refrigerante', label: 'Refrigerante' },
  { key: 'vazao', label: 'Vazão requerida' },
  { key: 'pressao', label: 'Pressão de operação' },
  { key: 'tensao', label: 'Alimentação' },
  { key: 'potenciaInstalada', label: 'Potência instalada' },
  { key: 'potenciaRegime', label: 'Potência em regime' },
  { key: 'corrente', label: 'Corrente nominal (220 / 380 / 440 V)' },
  { key: 'dimensoes', label: 'Dimensões (L x P x A)' },
  { key: 'peso', label: 'Peso' },
  { key: 'conexoes', label: 'Conexões' },
];

/** Linhas essenciais (as mesmas que o v4 mostra no celular antes do "Ver mais"). */
export const HTC_CORE_ROWS = ['capacidade', 'compressor', 'cop', 'vazao', 'potenciaRegime', 'dimensoes', 'peso', 'conexoes'];
