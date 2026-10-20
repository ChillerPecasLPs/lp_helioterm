/**
 * Modelo: v3 "Escolha guiada"
 * Ângulo: o visitante escolhe o caso e recebe a indicação, em passos curtos, com a mensagem de WhatsApp já pronta.
 * Gatilho principal: compromisso e consistência (micro-compromisso) + efeito Zeigarnik (tarefa iniciada pede conclusão) + menos opções.
 * AIDA: Atenção = hero (pergunta) | Interesse = steps (passos) | Desejo = guide (resposta personalizada)
 *       | Ação = botão de WhatsApp (guide.whatsappTemplate) e formulário no fim.
 * ctaEcho repete a headline: "o equipamento certo para o seu caso".
 */

export const copy = {
  "variant": "v3",
  "aida": {
    "attention": "hero",
    "interest": "steps",
    "desire": "guide",
    "action": "guide.whatsappTemplate"
  },
  "ctaEcho": "Ver o equipamento certo para o seu caso",
  "meta": {
    "title": "Equipamento certo para o seu caso | Chiller Peças",
    "description": "Escolha a sua aplicação e veja se o caso pede chiller HTC ou desumidificador industrial. Fabricação Helioterm, atendimento Chiller Peças."
  },
  "header": {
    "nav": [
      {
        "label": "Qual é o seu caso?",
        "href": "#guia"
      },
      {
        "label": "Chillers",
        "href": "#chillers"
      },
      {
        "label": "Desumidificadores",
        "href": "#desumidificadores"
      },
      {
        "label": "Por que Chiller Peças",
        "href": "#por-que"
      },
      {
        "label": "Contato",
        "href": "#contato"
      }
    ],
    "whatsappCta": "Falar no WhatsApp"
  },
  "hero": {
    "eyebrow": "Chiller Peças · escolha guiada",
    "headline": "Qual é o equipamento certo para o seu caso?",
    "subheadline": "Escolha a sua aplicação. A página mostra se o caso pede chiller ou desumidificador e abre o WhatsApp com a mensagem pronta para a engenharia.",
    "primaryCta": "Ver o equipamento certo para o seu caso",
    "secondaryCta": "Prefiro falar direto no WhatsApp",
    "trust": [
      "Fabricante Helioterm",
      "Chillers HTC 03, 05 e 09 AR",
      "Desumidificadores dutado e portátil",
      "Entregas em nível nacional"
    ]
  },
  "steps": {
    "title": "Três passos, menos de um minuto",
    "items": [
      {
        "n": 1,
        "title": "Escolha o seu caso",
        "text": "Toque na aplicação mais próxima da sua."
      },
      {
        "n": 2,
        "title": "Veja o equipamento indicado",
        "text": "Mostramos o modelo e o motivo."
      },
      {
        "n": 3,
        "title": "Envie a mensagem pronta",
        "text": "O WhatsApp abre com o seu caso preenchido."
      }
    ],
    "progressLabel": "Passo {atual} de 3"
  },
  "guide": {
    "title": "Qual é o seu caso?",
    "question": "Qual é o seu caso?",
    "options": [
      {
        "id": "injetora",
        "label": "Injetora de plástico ou refrigeração de moldes",
        "recommendation": "Chiller compacto HTC (03, 05 ou 09 AR conforme a carga)",
        "reason": "A Helioterm recomenda chillers compactos de 1 a 10 TR com controle de ±0,5°C para injetoras. A carga térmica define o modelo: HTC 03 (2.100 a 4.410 kcal/h), HTC 05 (2.760 a 5.910 kcal/h) ou HTC 09 (5.720 a 11.100 kcal/h).",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças [v3]. Meu caso: injetora de plástico ou refrigeração de moldes. Pode me indicar o equipamento?"
      },
      {
        "id": "cnc-laser",
        "label": "Máquina CNC ou soldagem a laser",
        "recommendation": "Chiller compacto HTC (03, 05 ou 09 AR conforme a carga)",
        "reason": "CNC e soldagem a laser estão entre as aplicações dos chillers compactos Helioterm. Mande a carga térmica e a engenharia confirma o modelo.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças [v3]. Meu caso: máquina CNC ou soldagem a laser. Pode me indicar o equipamento?"
      },
      {
        "id": "laboratorio",
        "label": "Laboratório ou equipamento médico",
        "recommendation": "Chiller compacto HTC (03, 05 ou 09 AR conforme a carga)",
        "reason": "Laboratórios e equipamentos médicos também são aplicações dos chillers compactos. O gabinete de 605 x 905 x 1080 mm serve onde o espaço é limitado.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças [v3]. Meu caso: laboratório ou equipamento médico. Pode me indicar o equipamento?"
      },
      {
        "id": "ambiente-umido",
        "label": "Sala de pintura, armazém ou câmara de cura com umidade alta",
        "recommendation": "Desumidificador industrial dutado",
        "reason": "Para tratar o ar do ambiente. A linha Helioterm controla a umidade entre 30% e 80% UR. Capacidade do modelo dutado: A CONFIRMAR.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças [v3]. Meu caso: ambiente com umidade alta (sala de pintura, armazém ou câmara de cura). Pode me indicar o equipamento?"
      },
      {
        "id": "ponto-umido",
        "label": "Subestação, sala de painéis ou ponto isolado com umidade",
        "recommendation": "Desumidificador industrial portátil",
        "reason": "Para tratar um ponto específico e poder mudar de lugar. Capacidade do modelo portátil: A CONFIRMAR.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças [v3]. Meu caso: ponto isolado com umidade (subestação ou sala de painéis). Pode me indicar o equipamento?"
      }
    ],
    "whatsappTemplate": "Olá, vim pela página da Chiller Peças [v3]. Meu caso: {caso}. Equipamento indicado: {equipamento}. Pode me ajudar?",
    "incomplete": "Falta pouco: escolha o seu caso para ver o equipamento indicado.",
    "done": "Pronto. Envie a mensagem e a engenharia continua daqui."
  },
  "applications": {
    "title": "Onde esses equipamentos trabalham",
    "items": [
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
      "Subestações elétricas e salas de painéis"
    ]
  },
  "chillers": {
    "title": "Se o seu caso é chiller: HTC 03, 05 e 09 AR",
    "intro": "Três capacidades no mesmo gabinete. A carga térmica diz qual entra.",
    "benefits": [
      {
        "title": "Cabe onde o espaço é curto",
        "text": "Design compacto para áreas com limitação de espaço físico. HTC 03, 05 e 09 AR ocupam as mesmas dimensões: 605 x 905 x 1080 mm."
      },
      {
        "title": "Instalação em 1 a 2 dias",
        "text": "O sistema plug-and-play vem carregado de fábrica com gás refrigerante e testado. Falta ligar a água e a energia elétrica e ajustar os parâmetros."
      },
      {
        "title": "Silencioso o bastante para ficar perto",
        "text": "Os chillers compactos Helioterm operam entre 55 e 65 dB(A) a 1 metro de distância. Compressor scroll faz menos ruído que pistão."
      },
      {
        "title": "Controle digital e proteções elétricas",
        "text": "Controlador microprocessado com display digital e proteções elétricas completas."
      }
    ],
    "tableTitle": "Especificações técnicas por modelo",
    "tableNote": "Capacidade frigorífica em kcal/h (mínima a máxima). Alimentação trifásica 220/380/440 V, 60 Hz. Dados do fabricante Helioterm.",
    "cta": "Pedir dimensionamento do chiller",
    "models": {
      "HTC 03 AR": {
        "tagline": "De 2.100 a 4.410 kcal/h. Conexões de 1\" e 185 kg."
      },
      "HTC 05 AR": {
        "tagline": "De 2.760 a 5.910 kcal/h, COP 1,72, no mesmo gabinete do HTC 03."
      },
      "HTC 09 AR": {
        "tagline": "De 5.720 a 11.100 kcal/h, COP 2,53 e conexões de 1.1/2\"."
      }
    }
  },
  "dehumidifiers": {
    "title": "Desumidificadores industriais dutado e portátil",
    "intro": "Umidade fora do ponto estraga produto e atrapalha o processo. Os dois formatos seguem a linha de desumidificação mecânica da Helioterm, projetada para ambientes industriais com controle de umidade relativa.",
    "products": {
      "dutado": {
        "name": "Desumidificador industrial dutado",
        "tagline": "Para ambientes que pedem ar tratado conduzido por dutos.",
        "bullets": [
          "Controle de umidade relativa de 30% a 80% UR (linha Helioterm)",
          "Compressor scroll e controlador digital microprocessado com display LCD",
          "Filtro de ar G4 lavável e reutilizável",
          "Conformidade com as normas NR-10 e NR-12"
        ],
        "specsStatus": "Especificações do modelo dutado: A CONFIRMAR"
      },
      "portatil": {
        "name": "Desumidificador industrial portátil",
        "tagline": "Para tratar o ar onde a umidade aparece, sem obra de instalação.",
        "bullets": [
          "Controle de umidade relativa de 30% a 80% UR (linha Helioterm)",
          "Compressor scroll e controlador digital microprocessado com display LCD",
          "Filtro de ar G4 lavável e reutilizável",
          "Conformidade com as normas NR-10 e NR-12"
        ],
        "specsStatus": "Especificações do modelo portátil: A CONFIRMAR"
      }
    },
    "line": {
      "title": "A linha Helioterm vai de 150 a 1.300 litros por dia",
      "text": "É a faixa de remoção de umidade da linha de desumidificadores Helioterm. A capacidade de cada formato, dutado ou portátil, entra assim que o fabricante confirmar: A CONFIRMAR."
    },
    "cta": "Falar sobre desumidificação no WhatsApp"
  },
  "sizing": {
    "title": "Dimensionamento",
    "intro": "O guia indica a família. O dimensionamento fecha o modelo.",
    "inputs": [
      "Carga térmica da aplicação",
      "Temperaturas de entrada e de saída desejadas",
      "Vazão de líquido",
      "Ambiente de instalação (interno ou externo, temperatura local)",
      "Alimentação elétrica disponível (tensão e frequência)",
      "Para desumidificação: volume do ambiente e umidade relativa desejada"
    ],
    "note": "Não tem todos os dados à mão? Mande o que tiver.",
    "cta": "Pedir dimensionamento"
  },
  "whyUs": {
    "title": "Por que comprar com a Chiller Peças",
    "intro": "Você escolhe o caso e a gente cuida do resto da conversa.",
    "points": [
      {
        "title": "Atendimento ágil, eficaz e diferenciado",
        "text": "É a nossa missão. Você fala com gente que entende de chiller e responde no WhatsApp."
      },
      {
        "title": "Tudo em um só lugar",
        "text": "Equipamento e peças para chillers com um único fornecedor. Menos cotações e menos telefonemas."
      },
      {
        "title": "Entregas em nível nacional",
        "text": "Atendemos indústrias de todo o país. Prazo por região: A CONFIRMAR."
      },
      {
        "title": "Excelente custo-benefício",
        "text": "Equipamento de fabricante com linha técnica completa. Condições comerciais: A CONFIRMAR."
      },
      {
        "title": "Linguagem de técnico para técnico",
        "text": "Quem especifica recebe dados de capacidade, vazão, elétrica e dimensões, sem rodeio."
      }
    ]
  },
  "faq": {
    "title": "Dúvidas frequentes",
    "items": [
      {
        "q": "Qual o melhor chiller para injetora de plástico?",
        "a": "Para injetoras de plástico, a Helioterm recomenda chillers compactos de 1 a 10 TR com controle preciso de temperatura (±0,5°C). O dimensionamento considera a capacidade da injetora, o ciclo de injeção, o tipo de molde e a temperatura desejada. Chillers com bomba integrada e reservatório são ideais para essa aplicação."
      },
      {
        "q": "Chiller compacto ou chiller industrial: qual escolher?",
        "a": "Os compactos (1 a 25 TR) servem para espaços reduzidos, demandas menores, instalação rápida e menor investimento inicial. Os industriais (25 a 400 TR) são indicados para grandes demandas térmicas, operação contínua 24/7, necessidade de redundância e processos críticos."
      },
      {
        "q": "Qual a temperatura mínima de água gelada do chiller compacto?",
        "a": "Na configuração padrão, os chillers compactos Helioterm fornecem água gelada de 5°C a 20°C. Para temperaturas abaixo de 5°C é necessário usar solução de glicol e configurar o equipamento para operação em baixa temperatura."
      },
      {
        "q": "O chiller compacto pode ser instalado do lado de fora?",
        "a": "Pode. Os compactos condensados a ar aceitam áreas externas cobertas ou semicobertas, com proteção contra chuva direta e boa circulação de ar. Em ambientes de temperatura alta, considere a versão com condensador remoto."
      },
      {
        "q": "Quanto tempo leva para instalar um chiller compacto?",
        "a": "Os chillers plug-and-play podem ser instalados em 1 a 2 dias, incluindo as conexões hidráulicas e elétricas. O sistema vem carregado de fábrica com gás refrigerante e testado. Basta conectar a tubulação de água e a energia elétrica e configurar os parâmetros."
      },
      {
        "q": "O desumidificador mecânico funciona em baixas temperaturas?",
        "a": "A linha de desumidificadores Helioterm opera de 5°C a 45°C e de 30% a 95% de umidade relativa. O sistema de degelo inteligente permite operação contínua mesmo em temperaturas baixas."
      }
    ]
  },
  "form": {
    "title": "Seu caso não está na lista? Conte pelo formulário",
    "intro": "Descreva a aplicação e a engenharia indica o equipamento.",
    "fields": {
      "name": "Nome",
      "company": "Empresa",
      "phone": "Telefone com DDD (WhatsApp)",
      "email": "E-mail corporativo",
      "product": {
        "label": "Qual equipamento você procura?",
        "options": [
          "Chiller compacto HTC 03 AR",
          "Chiller compacto HTC 05 AR",
          "Chiller compacto HTC 09 AR",
          "Desumidificador industrial dutado",
          "Desumidificador industrial portátil",
          "Ainda não sei, preciso de dimensionamento"
        ]
      },
      "application": "Qual é a aplicação? (ex.: injetora, CNC, sala de pintura)",
      "message": "Dados que você já tem (carga térmica, temperaturas, vazão, ambiente)"
    },
    "submit": "Enviar e pedir dimensionamento",
    "success": "Recebemos seus dados. A Chiller Peças entra em contato em breve.",
    "error": "Não foi possível enviar agora. Tente de novo ou fale com a gente no WhatsApp.",
    "privacyNote": "Usamos seus dados apenas para responder a esta solicitação. Política de privacidade: A CONFIRMAR."
  },
  "whatsapp": {
    "defaultMessage": "Olá, vim pela página da Chiller Peças [v3] e quero ver o equipamento certo para o meu caso.",
    "floatingLabel": "Falar no WhatsApp"
  },
  "footer": {
    "tagline": "Peça com agilidade. Chiller Peças.",
    "madeBy": "Equipamentos fabricados pela Helioterm.",
    "legal": "© Chiller Peças. Todos os direitos reservados. CNPJ e endereço: A CONFIRMAR."
  },
  "claimsToConfirm": [
    "Dimensionamento gratuito: o site Helioterm cita 'Dimensionamento gratuito'. A LP usa só 'Dimensionamento'. Confirmar se a Chiller Peças oferece sem custo.",
    "Faturamento facilitado (persona Carlos): fora do texto. Confirmar condições antes de usar.",
    "Entregas em nível nacional: vem do manual de marca. Confirmar prazo por região.",
    "Preço competitivo / excelente custo-benefício: vem do manual de marca, sem número. Confirmar política de preço ou condição a citar.",
    "Prazo e horário de resposta no WhatsApp: não afirmados. Confirmar.",
    "Economia de até 40% em energia (FreeDry), até 4,5 L/kWh (SMER) e 50+ anos de engenharia: fora do texto. Dependem de documento técnico ou confirmação da Helioterm.",
    "Desumidificadores dutado e portátil: confirmar com a Helioterm que as características de linha (30% a 80% UR, compressor scroll, controle digital, filtro G4, NR-10/NR-12) valem para os dois formatos.",
    "Descrição dos formatos ('conduzido por dutos', 'sem obra de instalação'): inferida do nome. Confirmar com o fabricante.",
    "Ruído de 55 a 65 dB(A) e instalação em 1 a 2 dias: vêm das FAQs dos compactos Helioterm (linha geral). Confirmar que valem para HTC 03, 05 e 09 AR.",
    "Faixa de temperatura do JSON (-8 a 10°C nos HTC 03/05; -6 a 10°C no HTC 09) não foi usada: difere da FAQ (água gelada de 5 a 20°C). Confirmar o significado antes de publicar.",
    "Política de privacidade e uso de dados (LGPD): compromisso da Chiller Peças. Confirmar com o jurídico.",
    "v3: a associação aplicação -> equipamento (CNC, laser, laboratório, medicina para chiller; pintura e câmara de cura para dutado; subestação e painéis para portátil) é recomendação de copy baseada nas listas de aplicações do site Helioterm. Confirmar com a engenharia.",
    "v3: o texto 'menos de um minuto' é estimativa de uso da página. Confirmar no teste."
  ],
  "pending": [
    "Dutado: capacidade (L/dia), vazão de ar, potência, dimensões, peso, ruído. A CONFIRMAR",
    "Portátil: capacidade (L/dia), vazão de ar, potência, dimensões, peso, ruído. A CONFIRMAR",
    "Prazo de entrega por região. A CONFIRMAR",
    "Condições comerciais e faturamento. A CONFIRMAR",
    "Número e link do WhatsApp comercial.",
    "Política de privacidade (URL e texto).",
    "CNPJ, razão social e endereço para o rodapé.",
    "Fotos dos equipamentos e confirmação do uso dos renders.",
    "Destino do formulário (e-mail ou CRM).",
    "Aprovação dos nomes 'dutado' e 'portátil' como nomes de produto."
  ]
} as const;
