/**
 * Modelo: v2 "Dimensionamento consultivo"
 * Ângulo: a Chiller Peças mostra o que define o chiller certo antes de pedir qualquer coisa. Formulário de 4 campos já no hero.
 * Gatilho principal: autoridade técnica + reciprocidade (valor antes do pedido, com os dados de seleção do site Helioterm).
 * AIDA: Atenção = hero (pergunta técnica) | Interesse = checklist (o que define o modelo)
 *       | Desejo = selection (seleção correta) | Ação = heroForm + form final (mesmos 4 campos obrigatórios, mais opcionais).
 * ctaEcho curto, com a palavra-chave da headline: "Receber a indicação do chiller" (heroForm.submit igual).
 */

export const copy = {
  "variant": "v2",
  "aida": {
    "attention": "hero",
    "interest": "checklist",
    "desire": "selection",
    "action": "heroForm"
  },
  "ctaEcho": "Receber a indicação do chiller",
  "meta": {
    "title": "Qual chiller a sua aplicação precisa? | Chiller Peças",
    "description": "Informe a aplicação e a equipe técnica da Chiller Peças indica entre os chillers HTC, fabricados pela Helioterm."
  },
  "header": {
    "nav": [
      {
        "label": "O que define o chiller",
        "href": "#checklist"
      },
      {
        "label": "Seleção",
        "href": "#selection"
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
        "label": "Contato",
        "href": "#contato"
      }
    ],
    "whatsappCta": "Chamar no WhatsApp"
  },
  "hero": {
    "eyebrow": "Chiller Peças · seleção técnica",
    "headline": "Qual chiller a sua aplicação precisa?",
    "subheadline": "Carga térmica, temperaturas, vazão, ambiente e energia elétrica definem o modelo. Conte o que você tem e a nossa equipe técnica da Chiller Peças responde com a indicação.",
    "primaryCta": "Receber a indicação do chiller",
    "secondaryCta": "Prefiro chamar no WhatsApp",
    "trust": [
      "Dados de seleção do fabricante Helioterm",
      "Chillers HTC 03, 05 e 09 AR",
      "Compressor scroll e refrigerante R410A",
      "Entregas em nível nacional"
    ]
  },
  "heroForm": {
    "title": "Conte sua aplicação",
    "fields": {
      "name": {
        "label": "Nome",
        "required": true
      },
      "company": {
        "label": "Empresa",
        "required": true
      },
      "phone": {
        "label": "Telefone com DDD (WhatsApp)",
        "required": true
      },
      "application": {
        "label": "Aplicação ou carga térmica (ex.: injetora, ou 5.000 kcal/h)",
        "required": true
      }
    },
    "submit": "Receber a indicação do chiller",
    "note": "Quatro campos. Os detalhes você completa com a nossa equipe técnica. A resposta vem pelo WhatsApp."
  },
  "checklist": {
    "title": "O que define o modelo do chiller",
    "intro": "Estes são os dados que o fabricante Helioterm usa na seleção. Se você já tem algum, ótimo.",
    "items": [
      "Carga térmica da aplicação",
      "Temperaturas de entrada e de saída desejadas",
      "Vazão de líquido",
      "Ambiente de instalação (interno ou externo, temperatura local)",
      "Alimentação elétrica disponível (tensão e frequência)"
    ]
  },
  "selection": {
    "title": "Por que a seleção certa importa",
    "text": "Para injetoras, o dimensionamento considera a capacidade da máquina, o ciclo de injeção, o tipo de molde e a temperatura desejada. Com esses dados, a nossa equipe técnica aponta o modelo, entre o HTC 03 AR (2.100 a 4.410 kcal/h), o HTC 05 AR (2.760 a 5.910 kcal/h) e o HTC 09 AR (5.720 a 11.100 kcal/h), ou outro da linha HTC se a carga for maior.",
    "points": [
      {
        "title": "Capacidade na faixa certa",
        "text": "Cada modelo cobre uma faixa de kcal/h. A carga térmica diz qual."
      },
      {
        "title": "Hidráulica e elétrica conferidas",
        "text": "Vazão requerida, conexões (1\" ou 1 1/2\") e alimentação trifásica 220/380/440 V entram na conta."
      }
    ]
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
    "title": "Os três modelos que a seleção pode indicar",
    "intro": "HTC 03, 05 e 09 AR: mesmo gabinete de 605 x 905 x 1080 mm, compressor scroll e R410A.",
    "benefits": [
      {
        "title": "Cabe onde o espaço é curto",
        "text": "Design compacto para áreas com limitação de espaço físico. HTC 03, 05 e 09 AR ocupam as mesmas dimensões: 605 x 905 x 1080 mm."
      },
      {
        "title": "Plug-and-play, pronto para ligar",
        "text": "Vem carregado de fábrica e testado. O fabricante cita 1 a 2 dias para instalar, incluindo as conexões hidráulicas e elétricas."
      },
      {
        "title": "Operação silenciosa",
        "text": "Os compactos Helioterm operam entre 55 e 65 dB(A) a 1 metro, segundo o fabricante."
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
        "tagline": "De 5.720 a 11.100 kcal/h, COP 2,53 e conexões de 1 1/2\"."
      }
    }
  },
  "dehumidifiers": {
    "title": "Desumidificadores industriais dutado e portátil",
    "intro": "A seleção também vale para umidade. Conte o ambiente e a umidade relativa desejada. Dutado e portátil fazem parte da oferta de desumidificação industrial fabricada pela Helioterm.",
    "products": {
      "dutado": {
        "name": "Desumidificador industrial dutado",
        "tagline": "Para tratar o ar do ambiente com distribuição por dutos.",
        "bullets": [
          "Ar tratado conduzido por dutos",
          "Indicado para tratar o ambiente",
          "Para indicar a capacidade, mande o volume do ambiente e a umidade desejada"
        ],
        "specsStatus": "Capacidade: informe o seu ambiente e a gente indica."
      },
      "portatil": {
        "name": "Desumidificador industrial portátil",
        "tagline": "Para tratar o ar onde a umidade aparece.",
        "bullets": [
          "Pode ser levado de um ponto a outro",
          "Indicado para tratar um ponto específico",
          "Para indicar a capacidade, mande o volume do ambiente e a umidade desejada"
        ],
        "specsStatus": "Capacidade: informe o seu ambiente e a gente indica."
      }
    },
    "line": {
      "title": "Linha de desumidificadores Helioterm: 150 a 1.300 litros por dia",
      "text": "Controle de umidade relativa de 30% a 80% UR, compressor scroll, controlador digital e filtro G4 lavável. Dutado ou portátil, a capacidade ideal depende do seu ambiente. Mande o volume e a umidade desejada que a gente indica."
    },
    "cta": "Pedir desumidificador no WhatsApp"
  },
  "sizing": {
    "title": "Dimensionamento",
    "intro": "Quanto mais completo o envio, mais rápida a indicação.",
    "inputs": [
      "Carga térmica da aplicação",
      "Temperaturas de entrada e de saída desejadas",
      "Vazão de líquido",
      "Ambiente de instalação (interno ou externo, temperatura local)",
      "Alimentação elétrica disponível (tensão e frequência)",
      "Para desumidificação: volume do ambiente e umidade relativa desejada"
    ],
    "note": "Não tem todos os dados à mão? Descreva a máquina ou o processo. Carga acima de 11.100 kcal/h (cerca de 3,7 TR)? A linha HTC segue até 73.200 kcal/h. Fale com a nossa equipe.",
    "cta": "Pedir dimensionamento"
  },
  "whyUs": {
    "title": "Por que pedir a indicação à Chiller Peças",
    "intro": "Você conversa com quem fala a língua do refrigerista.",
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
        "text": "Atendemos indústrias de todo o país. Informe a cidade da instalação na sua mensagem."
      },
      {
        "title": "Linha técnica completa",
        "text": "Chillers e desumidificadores de um fabricante que publica catálogo, manual de instalação e termo de garantia."
      },
      {
        "title": "Linguagem de técnico para técnico",
        "text": "Quem especifica recebe dados de capacidade, vazão, elétrica e dimensões."
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
        "q": "O chiller compacto pode ser instalado do lado de fora?",
        "a": "Segundo o fabricante, os compactos condensados a ar aceitam áreas externas cobertas ou semicobertas, com proteção contra chuva direta e boa circulação de ar. Em ambientes de temperatura alta, considere a versão com condensador remoto."
      },
      {
        "q": "Quanto tempo leva para instalar um chiller compacto?",
        "a": "O fabricante cita 1 a 2 dias para instalar os chillers plug-and-play, incluindo as conexões hidráulicas e elétricas. O sistema vem carregado de fábrica com gás refrigerante e testado. Basta conectar a tubulação de água e a energia elétrica e configurar os parâmetros."
      },
      {
        "q": "O desumidificador mecânico funciona em baixas temperaturas?",
        "a": "A linha de desumidificadores Helioterm opera de 5°C a 45°C e de 30% a 95% de umidade relativa. O sistema de degelo inteligente permite operação contínua mesmo em temperaturas baixas."
      }
    ]
  },
  "form": {
    "title": "Prefere detalhar mais? Use o formulário completo",
    "intro": "Mais dados significam indicação mais precisa.",
    "fields": {
      "name": {
        "label": "Nome",
        "required": true
      },
      "company": {
        "label": "Empresa",
        "required": true
      },
      "phone": {
        "label": "Telefone com DDD (WhatsApp)",
        "required": true
      },
      "email": {
        "label": "E-mail (opcional)",
        "required": false
      },
      "product": {
        "label": "Qual equipamento você procura? (opcional)",
        "required": false,
        "options": [
          "Chiller compacto HTC 03 AR",
          "Chiller compacto HTC 05 AR",
          "Chiller compacto HTC 09 AR",
          "Desumidificador industrial dutado",
          "Desumidificador industrial portátil",
          "Ainda não sei, preciso de dimensionamento"
        ]
      },
      "application": {
        "label": "Aplicação e dados que você já tem (carga térmica, temperaturas, vazão, ambiente)",
        "required": true
      }
    },
    "submit": "Enviar pedido",
    "success": "Recebemos seus dados. A Chiller Peças entra em contato em breve.",
    "error": "Não foi possível enviar agora. Tente de novo ou chame a gente no WhatsApp.",
    "privacyNote": "Usamos seus dados só para responder a este pedido. Veja a política de privacidade.",
    "privacyHref": "https://www.chillerpecas.com.br/politica-de-privacidade"
  },
  "whatsapp": {
    "defaultMessage": "Olá, vim pela página da Chiller Peças (ref. v2). Quero saber qual chiller a minha aplicação precisa.",
    "floatingLabel": "Chamar no WhatsApp"
  },
  "footer": {
    "tagline": "Peça com agilidade. Chiller Peças.",
    "madeBy": "Equipamentos fabricados pela Helioterm.",
    "legal": "© Chiller Peças. Todos os direitos reservados."
  },
  "claimsToConfirm": [
    "Dimensionamento gratuito: o site Helioterm cita; a LP usa só 'Dimensionamento'. Confirmar se a Chiller Peças oferece sem custo.",
    "Faturamento facilitado (persona Carlos): fora do texto. Confirmar condições antes de usar.",
    "Entregas em nível nacional: vem do manual de marca. Confirmar cobertura e prazo por região.",
    "Preço competitivo e excelente custo-benefício: saíram da página (manual de marca, sem número). Reintroduzir só com política de preço.",
    "Prazo e horário de resposta no WhatsApp: não afirmados. Confirmar.",
    "Economia de até 40% em energia (FreeDry), até 4,5 L/kWh (SMER) e 50+ anos de engenharia: fora do texto. Dependem de documento técnico ou confirmação da Helioterm.",
    "Características da linha de desumidificadores (30% a 80% UR, scroll, controle digital, filtro G4) aparecem como da linha Helioterm, não do dutado ou do portátil. Confirmar quais valem para cada formato. NR-10/NR-12 saiu da página pelo mesmo motivo.",
    "Descrição dos formatos ('conduzido por dutos', 'levado de um ponto a outro'): inferida do nome. Confirmar com o fabricante.",
    "Ruído de 55 a 65 dB(A) e 1 a 2 dias de instalação: vêm das FAQs dos compactos Helioterm (linha geral), atribuídos ao fabricante. Confirmar que valem para HTC 03, 05 e 09 AR.",
    "Faixa de temperatura do JSON (-8 a 10°C nos HTC 03/05; -6 a 10°C no HTC 09) conflita com a FAQ do site (água gelada de 5 a 20°C). A pergunta 'temperatura mínima' saiu da página até o significado ser confirmado.",
    "Catálogo, manual de instalação e termo de garantia (citados no site Helioterm): confirmar se a Chiller Peças pode oferecê-los antes de manter o texto 'Linha técnica completa'.",
    "Uso dos dados só para responder ao pedido (LGPD): compromisso da Chiller Peças. Confirmar com o jurídico.",
    "v2: o exemplo '5.000 kcal/h' no campo do hero é ilustrativo e cai só na faixa do HTC 05 AR (2.760 a 5.910 kcal/h). Confirmar se mantém."
  ],
  "pending": [
    "Dutado: capacidade (L/dia), vazão de ar, potência total, dimensões, peso, ruído. A CONFIRMAR",
    "Portátil: capacidade (L/dia), vazão de ar, potência total, dimensões, peso, ruído. A CONFIRMAR",
    "Prazo de entrega por região. A CONFIRMAR",
    "Condições comerciais e faturamento. A CONFIRMAR",
    "Número e link do WhatsApp comercial.",
    "CNPJ, razão social e endereço (saíram do rodapé; incluir quando confirmados).",
    "Oferta de catálogo, manual e termo de garantia pela Chiller Peças.",
    "Fotos dos equipamentos e confirmação do uso dos renders.",
    "Destino do formulário (e-mail ou CRM).",
    "Aprovação dos nomes 'dutado' e 'portátil' como nomes de produto."
  ]
} as const;
