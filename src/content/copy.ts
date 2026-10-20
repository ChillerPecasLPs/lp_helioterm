// Copy da LP Chiller Peças (equipamentos fabricados pela Helioterm).
// Campos com "A CONFIRMAR" dependem de dados do cliente. Ver `pending` e `claimsToConfirm`.

export const copy = {
  meta: {
    title: "Chiller compacto e desumidificador industrial | Chiller Peças",
    description:
      "Chillers compactos HTC 03, 05 e 09 AR e desumidificadores industriais dutado e portátil, fabricados pela Helioterm. Peça com agilidade. Chiller Peças.",
  },

  header: {
    nav: [
      { label: "Chillers", href: "#chillers" },
      { label: "Desumidificadores", href: "#desumidificadores" },
      { label: "Dimensionamento", href: "#dimensionamento" },
      { label: "Por que Chiller Peças", href: "#por-que" },
      { label: "Dúvidas", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
    whatsappCta: "Falar no WhatsApp",
  },

  hero: {
    eyebrow: "Chillers e desumidificadores industriais, fabricação Helioterm",
    headline: "Temperatura e umidade sob controle na sua indústria. Peça com agilidade.",
    subheadline:
      "Chillers compactos HTC e desumidificadores industriais fabricados pela Helioterm, com atendimento direto da Chiller Peças. Conte sua aplicação no WhatsApp e a engenharia indica o equipamento.",
    primaryCta: "Falar com a engenharia no WhatsApp",
    secondaryCta: "Ver os equipamentos",
    trust: [
      "Fabricante Helioterm",
      "Chillers HTC com compressor scroll e refrigerante R410A",
      "Chillers plug-and-play, carregados de fábrica",
      "Entregas em nível nacional",
    ],
  },

  applications: {
    title: "Onde esses equipamentos trabalham",
    items: [
      "Injetoras de plástico",
      "Máquinas CNC",
      "Laboratórios",
      "Equipamentos médicos",
      "Impressão gráfica",
      "Soldagem a laser",
      "Refrigeração de moldes",
      "Processos industriais",
      "Indústria farmacêutica e cosmética",
      "Indústria alimentícia e de bebidas",
      "Indústria plástica e de embalagens",
      "Armazéns e centros de distribuição",
      "Indústria de papel e celulose",
      "Indústria têxtil e confecções",
      "Salas de pintura industrial",
      "Estações de tratamento de água (ETA/ETE)",
      "Indústria eletrônica e semicondutores",
      "Câmaras de maturação e cura",
      "Subestações elétricas e salas de painéis",
    ],
  },

  chillers: {
    title: "Chillers compactos HTC 03, 05 e 09 AR",
    intro:
      "Três modelos para quem tem pouco espaço e precisa resfriar líquido de processo. Os três usam o mesmo gabinete de 605 x 905 x 1080 mm, compressor scroll e refrigerante R410A.",
    benefits: [
      {
        title: "Cabe onde o espaço é curto",
        text: "Design compacto para áreas com limitação de espaço físico. HTC 03, 05 e 09 AR ocupam as mesmas dimensões.",
      },
      {
        title: "Instalação em 1 a 2 dias",
        text: "O sistema plug-and-play vem carregado de fábrica com gás refrigerante e testado. Falta ligar a água, a energia elétrica e ajustar os parâmetros.",
      },
      {
        title: "Silencioso o bastante para ficar perto",
        text: "Os chillers compactos Helioterm operam entre 55 e 65 dB(A) a 1 metro de distância. Compressor scroll faz menos ruído que pistão.",
      },
      {
        title: "Controle digital e proteções elétricas",
        text: "Controlador microprocessado com display digital e proteções elétricas completas.",
      },
    ],
    tableTitle: "Especificações técnicas por modelo",
    tableNote:
      "Capacidade frigorífica em kcal/h (mínima a máxima). Alimentação trifásica 220/380/440 V, 60 Hz. Dados do fabricante Helioterm.",
    cta: "Pedir dimensionamento do chiller",
    models: {
      "HTC 03 AR": {
        tagline: "De 2.100 a 4.410 kcal/h. Conexões de 1\" e 185 kg.",
      },
      "HTC 05 AR": {
        tagline: "De 2.760 a 5.910 kcal/h, COP 1,72, no mesmo gabinete do HTC 03.",
      },
      "HTC 09 AR": {
        tagline: "De 5.720 a 11.100 kcal/h, COP 2,53 e conexões de 1.1/2\".",
      },
    },
  },

  dehumidifiers: {
    title: "Desumidificadores industriais dutado e portátil",
    intro:
      "Umidade fora do ponto estraga produto e para processo. Os dois formatos seguem a linha de desumidificação mecânica da Helioterm, projetada para ambientes industriais com controle de umidade relativa.",
    products: {
      dutado: {
        name: "Desumidificador industrial dutado",
        tagline: "Para ambientes que pedem ar tratado conduzido por dutos.",
        bullets: [
          "Controle de umidade relativa de 30% a 80% UR (linha Helioterm)",
          "Compressor scroll e controlador digital microprocessado com display LCD",
          "Filtro de ar G4 lavável e reutilizável",
          "Conformidade com as normas NR-10 e NR-12",
        ],
        specsStatus: "Especificações do modelo dutado: A CONFIRMAR",
      },
      portatil: {
        name: "Desumidificador industrial portátil",
        tagline: "Para tratar o ar onde a umidade aparece, sem obra de instalação.",
        bullets: [
          "Controle de umidade relativa de 30% a 80% UR (linha Helioterm)",
          "Compressor scroll e controlador digital microprocessado com display LCD",
          "Filtro de ar G4 lavável e reutilizável",
          "Conformidade com as normas NR-10 e NR-12",
        ],
        specsStatus: "Especificações do modelo portátil: A CONFIRMAR",
      },
    },
    line: {
      title: "A linha Helioterm vai de 150 a 1.300 litros por dia",
      text: "É a faixa de remoção de umidade da linha de desumidificadores Helioterm. A capacidade de cada formato, dutado ou portátil, entra assim que o fabricante confirmar: A CONFIRMAR. Se você já sabe o volume de ar e a umidade que precisa, o dimensionamento indica a opção certa.",
    },
    cta: "Falar sobre desumidificação no WhatsApp",
  },

  sizing: {
    title: "Dimensionamento",
    intro:
      "Mande os dados da sua aplicação e a engenharia indica o equipamento. Quanto mais completo o envio, mais rápida a resposta.",
    inputs: [
      "Carga térmica da aplicação",
      "Temperaturas de entrada e de saída desejadas",
      "Vazão de líquido",
      "Ambiente de instalação (interno ou externo, temperatura local)",
      "Alimentação elétrica disponível (tensão e frequência)",
      "Para desumidificação: volume do ambiente e umidade relativa desejada",
    ],
    note: "Não tem todos os dados à mão? Mande o que tiver e descreva a máquina ou o processo. A engenharia ajuda a completar o resto.",
    cta: "Pedir dimensionamento",
  },

  whyUs: {
    title: "Por que comprar com a Chiller Peças",
    intro:
      "A Chiller Peças nasceu para facilitar a vida de quem trabalha com refrigeração. A mesma lógica vale para quem compra e para quem especifica o equipamento.",
    points: [
      {
        title: "Atendimento ágil, eficaz e diferenciado",
        text: "É a nossa missão. Você fala com gente que entende de chiller e responde no WhatsApp.",
      },
      {
        title: "Tudo em um só lugar",
        text: "Equipamento e peças para chillers com um único fornecedor. Menos cotações e menos telefonemas.",
      },
      {
        title: "Entregas em nível nacional",
        text: "Atendemos indústrias de todo o país. Prazo por região: A CONFIRMAR.",
      },
      {
        title: "Excelente custo-benefício",
        text: "Equipamento de fabricante com linha técnica completa, a um preço competitivo. Condições comerciais: A CONFIRMAR.",
      },
      {
        title: "Linguagem de técnico para técnico",
        text: "Quem especifica recebe dados de capacidade, vazão, elétrica e dimensões, sem rodeio.",
      },
    ],
  },

  faq: {
    title: "Dúvidas frequentes",
    items: [
      {
        q: "Qual o melhor chiller para injetora de plástico?",
        a: "Para injetoras de plástico, a Helioterm recomenda chillers compactos de 1 a 10 TR com controle preciso de temperatura (±0,5°C). O dimensionamento considera a capacidade da injetora, o ciclo de injeção, o tipo de molde e a temperatura desejada. Chillers com bomba integrada e reservatório são ideais para essa aplicação.",
      },
      {
        q: "Chiller compacto ou chiller industrial: qual escolher?",
        a: "Os compactos (1 a 25 TR) servem para espaços reduzidos, demandas menores, instalação rápida e menor investimento inicial. Os industriais (25 a 400 TR) são indicados para grandes demandas térmicas, operação contínua 24/7, necessidade de redundância e processos críticos.",
      },
      {
        q: "Qual a temperatura mínima de água gelada do chiller compacto?",
        a: "Na configuração padrão, os chillers compactos Helioterm fornecem água gelada de 5°C a 20°C. Para temperaturas abaixo de 5°C é necessário usar solução de glicol e configurar o equipamento para operação em baixa temperatura.",
      },
      {
        q: "O chiller compacto pode ser instalado do lado de fora?",
        a: "Pode. Os compactos condensados a ar aceitam áreas externas cobertas ou semicobertas, com proteção contra chuva direta e boa circulação de ar. Em ambientes de temperatura alta, considere a versão com condensador remoto.",
      },
      {
        q: "Quanto tempo leva para instalar um chiller compacto?",
        a: "Os chillers plug-and-play podem ser instalados em 1 a 2 dias, incluindo as conexões hidráulicas e elétricas. O sistema vem carregado de fábrica com gás refrigerante e testado. Basta conectar a tubulação de água e a energia elétrica e configurar os parâmetros.",
      },
      {
        q: "O desumidificador mecânico funciona em baixas temperaturas?",
        a: "A linha de desumidificadores Helioterm opera de 5°C a 45°C e de 30% a 95% de umidade relativa. O sistema de degelo inteligente permite operação contínua mesmo em temperaturas baixas.",
      },
    ],
  },

  form: {
    title: "Conte sua aplicação e receba o retorno da engenharia",
    intro:
      "Preencha o formulário. Se preferir conversar agora, use o botão de WhatsApp.",
    fields: {
      name: "Nome",
      company: "Empresa",
      phone: "Telefone com DDD (WhatsApp)",
      email: "E-mail corporativo",
      product: {
        label: "Qual equipamento você procura?",
        options: [
          "Chiller compacto HTC 03 AR",
          "Chiller compacto HTC 05 AR",
          "Chiller compacto HTC 09 AR",
          "Desumidificador industrial dutado",
          "Desumidificador industrial portátil",
          "Ainda não sei, preciso de dimensionamento",
        ],
      },
      application: "Qual é a aplicação? (ex.: injetora, CNC, sala de pintura)",
      message: "Dados que você já tem (carga térmica, temperaturas, vazão, ambiente)",
    },
    submit: "Enviar e pedir dimensionamento",
    success: "Recebemos seus dados. A Chiller Peças entra em contato em breve.",
    error: "Não foi possível enviar agora. Tente de novo ou fale com a gente no WhatsApp.",
    privacyNote:
      "Usamos seus dados apenas para responder a esta solicitação. Política de privacidade: A CONFIRMAR.",
  },

  whatsapp: {
    defaultMessage:
      "Olá, vim pela página da Chiller Peças e quero falar com a engenharia sobre chiller ou desumidificador industrial.",
    floatingLabel: "Falar no WhatsApp",
  },

  footer: {
    tagline: "Peça com agilidade. Chiller Peças.",
    madeBy: "Equipamentos fabricados pela Helioterm.",
    legal: "© Chiller Peças. Todos os direitos reservados. CNPJ e endereço: A CONFIRMAR.",
  },

  claimsToConfirm: [
    "Dimensionamento gratuito: o site Helioterm cita 'Dimensionamento gratuito'. A LP usa só 'Dimensionamento'. Confirmar se a Chiller Peças oferece sem custo.",
    "Faturamento facilitado (persona Carlos): não aparece no texto. Confirmar condições (prazos, parcelamento, faturamento para CNPJ) antes de usar.",
    "Entregas em nível nacional: vem do manual de marca. Confirmar prazo por região para substituir 'A CONFIRMAR' na seção Por que Chiller Peças.",
    "Preço competitivo / excelente custo-benefício: vem do manual de marca. Sem número ou comparação. Confirmar se há política de preço ou condição a citar.",
    "Prazo de resposta no WhatsApp: não afirmado. Confirmar horário de atendimento e tempo médio de resposta.",
    "Economia de até 40% em energia (FreeDry): fora do texto. Precisa de ensaio ou documento técnico da Helioterm.",
    "Até 4,5 L/kWh (SMER): fora do texto. Precisa de ensaio ou documento técnico da Helioterm, por modelo.",
    "50+ anos de engenharia (Helioterm): fora do texto. Precisa de confirmação da Helioterm, pois vem do site dela.",
    "Desumidificador dutado e portátil: confirmar com a Helioterm que as características de linha (30% a 80% UR, compressor scroll, controle digital, filtro G4, NR-10/NR-12) valem para os dois formatos.",
    "Descrição dos formatos ('conduzido por dutos', 'sem obra de instalação'): inferida do nome. Confirmar com o fabricante.",
    "Ruído de 55 a 65 dB(A) a 1 m e instalação em 1 a 2 dias: vêm das FAQs dos chillers compactos Helioterm (linha geral). Confirmar que valem para HTC 03, 05 e 09 AR.",
    "Faixa de temperatura do JSON (-8 a 10°C nos HTC 03/05; -6 a 10°C no HTC 09) não foi usada: difere da FAQ (água gelada de 5 a 20°C na configuração padrão). Confirmar o significado antes de publicar.",
    "Política de privacidade e uso de dados (LGPD): o texto do formulário é um compromisso da Chiller Peças. Confirmar com o jurídico.",
  ],

  pending: [
    "Dutado: capacidade (L/dia), vazão de ar, potência, dimensões, peso, ruído. A CONFIRMAR",
    "Portátil: capacidade (L/dia), vazão de ar, potência, dimensões, peso, ruído. A CONFIRMAR",
    "Prazo de entrega por região. A CONFIRMAR",
    "Condições comerciais e faturamento. A CONFIRMAR",
    "Número e link do WhatsApp comercial.",
    "Política de privacidade (URL e texto).",
    "CNPJ, razão social e endereço para o rodapé.",
    "Logo da Chiller Peças em SVG ou PNG transparente.",
    "Fotos dos equipamentos (HTC 03, 05, 09 AR, dutado e portátil).",
    "Destino do formulário (e-mail ou CRM) e texto final de sucesso.",
    "Aprovação dos nomes 'dutado' e 'portátil' como nomes de produto na LP.",
  ],
} as const;
