/**
 * Modelo: v4 "Produto em evidência"
 * Ângulo: números reais do fabricante, lado a lado, com um pedido por modelo.
 * Gatilho principal: prova concreta e especificidade (dados do JSON Helioterm).
 * AIDA: Atenção = hero (foto real do chiller) | Interesse = compare (comparativo dos 3 HTC)
 *       | Desejo = chillers.models + specs (detalhe de cada um) | Ação = CTA por modelo (chillers.modelCtas) e formulário final.
 * ctaEcho repete a headline: "HTC 03, 05 e 09 AR".
 */

export const copy = {
  "variant": "v4",
  "aida": {
    "attention": "hero",
    "interest": "compare",
    "desire": "chillers",
    "action": "chillers.modelCtas"
  },
  "ctaEcho": "Pedir os chillers HTC 03, 05 e 09 AR no WhatsApp",
  "meta": {
    "title": "Chillers HTC 03, 05 e 09 AR | Chiller Peças",
    "description": "Compare os chillers compactos HTC 03, 05 e 09 AR com os números do fabricante Helioterm. Chiller Peças: peça com agilidade."
  },
  "header": {
    "nav": [
      {
        "label": "Comparativo",
        "href": "#comparativo"
      },
      {
        "label": "Modelos",
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
    "whatsappCta": "Pedir no WhatsApp"
  },
  "hero": {
    "eyebrow": "Chiller Peças · chillers compactos Helioterm",
    "headline": "Chillers compactos HTC 03, 05 e 09 AR, com os números à mostra.",
    "subheadline": "Capacidade, COP, compressor, conexões, peso e dimensões de cada modelo, direto da ficha do fabricante Helioterm. Escolha o seu e peça pelo WhatsApp.",
    "primaryCta": "Pedir os chillers HTC 03, 05 e 09 AR no WhatsApp",
    "secondaryCta": "Ver o comparativo",
    "imageAlt": "Chiller compacto HTC em foto real. Foto: A CONFIRMAR",
    "trust": [
      "Dados da ficha técnica do fabricante Helioterm",
      "Compressor scroll e refrigerante R410A",
      "Mesmo gabinete nos três modelos",
      "Entregas em nível nacional"
    ]
  },
  "compare": {
    "title": "Comparativo dos três modelos",
    "rows": [
      {
        "key": "capacidade",
        "label": "Capacidade frigorífica (kcal/h)"
      },
      {
        "key": "compressor",
        "label": "Compressor"
      },
      {
        "key": "cop",
        "label": "COP"
      },
      {
        "key": "refrigerante",
        "label": "Refrigerante"
      },
      {
        "key": "vazao",
        "label": "Vazão requerida"
      },
      {
        "key": "pressao",
        "label": "Pressão de operação"
      },
      {
        "key": "tensao",
        "label": "Alimentação"
      },
      {
        "key": "potenciaInstalada",
        "label": "Potência instalada"
      },
      {
        "key": "potenciaRegime",
        "label": "Potência em regime"
      },
      {
        "key": "corrente",
        "label": "Corrente nominal (220 / 380 / 440 V)"
      },
      {
        "key": "dimensoes",
        "label": "Dimensões (L x P x A)"
      },
      {
        "key": "peso",
        "label": "Peso"
      },
      {
        "key": "conexoes",
        "label": "Conexões"
      }
    ],
    "values": {
      "HTC 03 AR": {
        "capacidade": "2.100 a 4.410",
        "compressor": "Scroll, 3 HP x1",
        "cop": "1,22",
        "refrigerante": "R410A",
        "vazao": "2,26 m³/h",
        "pressao": "30 mca",
        "tensao": "3F 220/380/440 V + N + T, 60 Hz",
        "potenciaInstalada": "5,9 kVA",
        "potenciaRegime": "4,2 kW",
        "corrente": "15,5 A / 9,0 A / 7,7 A",
        "dimensoes": "605 x 905 x 1080 mm",
        "peso": "185 kg",
        "conexoes": "1\" entrada/saída"
      },
      "HTC 05 AR": {
        "capacidade": "2.760 a 5.910",
        "compressor": "Scroll, 4 HP x1",
        "cop": "1,72",
        "refrigerante": "R410A",
        "vazao": "3,03 m³/h",
        "pressao": "30 mca",
        "tensao": "3F 220/380/440 V + N + T, 60 Hz",
        "potenciaInstalada": "5,6 kVA",
        "potenciaRegime": "4,0 kW",
        "corrente": "14,7 A / 8,5 A / 7,4 A",
        "dimensoes": "605 x 905 x 1080 mm",
        "peso": "210 kg",
        "conexoes": "1\" entrada/saída"
      },
      "HTC 09 AR": {
        "capacidade": "5.720 a 11.100",
        "compressor": "Scroll, 6 HP x1",
        "cop": "2,53",
        "refrigerante": "R410A",
        "vazao": "5,69 m³/h",
        "pressao": "30 mca",
        "tensao": "3F 220/380/440 V + N + T, 60 Hz",
        "potenciaInstalada": "7,2 kVA",
        "potenciaRegime": "5,1 kW",
        "corrente": "18,9 A / 11,0 A / 9,5 A",
        "dimensoes": "605 x 905 x 1080 mm",
        "peso": "280 kg",
        "conexoes": "1.1/2\" entrada/saída"
      }
    }
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
    "title": "Os três modelos em detalhe",
    "intro": "Mesmo gabinete de 605 x 905 x 1080 mm. O que muda é capacidade, compressor, peso e conexão.",
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
        "tagline": "2.100 a 4.410 kcal/h, scroll 3 HP, COP 1,22, conexões 1\", 185 kg, 605 x 905 x 1080 mm."
      },
      "HTC 05 AR": {
        "tagline": "2.760 a 5.910 kcal/h, scroll 4 HP, COP 1,72, conexões 1\", 210 kg, 605 x 905 x 1080 mm."
      },
      "HTC 09 AR": {
        "tagline": "5.720 a 11.100 kcal/h, scroll 6 HP, COP 2,53, conexões 1.1/2\", 280 kg, 605 x 905 x 1080 mm."
      }
    },
    "modelCtas": {
      "HTC 03 AR": "Pedir o HTC 03 AR no WhatsApp",
      "HTC 05 AR": "Pedir o HTC 05 AR no WhatsApp",
      "HTC 09 AR": "Pedir o HTC 09 AR no WhatsApp"
    }
  },
  "dehumidifiers": {
    "title": "Desumidificadores industriais dutado e portátil",
    "intro": "Ainda sem ficha por modelo. As características abaixo são da linha de desumidificação mecânica Helioterm; os números de cada formato entram quando o fabricante confirmar.",
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
    "cta": "Falar sobre desumidificação no WhatsApp",
    "specsTable": {
      "rows": [
        "Capacidade (L/dia)",
        "Vazão de ar (m³/h)",
        "Potência total (kW)",
        "Ruído (dB)",
        "Dimensões (L x P x A)",
        "Peso"
      ],
      "dutado": "A CONFIRMAR",
      "portatil": "A CONFIRMAR"
    }
  },
  "sizing": {
    "title": "Não sabe qual modelo escolher? Peça o dimensionamento",
    "intro": "Mande os dados e a engenharia indica entre os três.",
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
    "intro": "Ficha técnica na mão e atendimento de quem entende de chiller.",
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
    "title": "Peça o seu HTC ou tire dúvidas",
    "intro": "Informe o modelo de interesse e a aplicação.",
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
    "defaultMessage": "Olá, vim pela página da Chiller Peças [v4] e quero pedir os chillers HTC 03, 05 e 09 AR. Pode me ajudar?",
    "floatingLabel": "Pedir no WhatsApp",
    "modelTemplate": "Olá, vim pela página da Chiller Peças [v4] e quero pedir o {modelo}. Pode me ajudar?"
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
    "v4: foto real do chiller: confirmar origem, direito de uso e o nome 'Helinterm' visível ao fundo da foto."
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
    "Aprovação dos nomes 'dutado' e 'portátil' como nomes de produto.",
    "Foto real do chiller para o hero (arquivo e legenda)."
  ]
} as const;
