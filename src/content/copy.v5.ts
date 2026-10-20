/**
 * Modelo: v5 "Conversa direta"
 * Ângulo: página curta em formato de conversa, tom amigável da marca, mobile-first.
 * Gatilho principal: proximidade e baixo atrito (tom amigável, resposta curta, um único CTA).
 * AIDA: Atenção = hero (pergunta direta) | Interesse = chat (3 respostas curtas)
 *       | Desejo = showcase (ver o equipamento) | Ação = botão único de WhatsApp; formulário só como alternativa no fim.
 * Página curta: o bloco sizing sai (sizing.omit) e o showcase se funde com chillers (showcase.mergeInto).
 * Registro: imperativo formal ("Conte", "Mande").
 * ctaEcho curto, com linha acima (hero.ctaLead): "Chiller ou desumidificador industrial" + "Chamar no WhatsApp".
 */

export const copy = {
  "variant": "v5",
  "aida": {
    "attention": "hero",
    "interest": "chat",
    "desire": "showcase",
    "action": "whatsapp"
  },
  "ctaEcho": "Chamar no WhatsApp",
  "meta": {
    "title": "Chiller ou desumidificador? Fale com a gente | Chiller Peças",
    "description": "Converse no WhatsApp com a Chiller Peças sobre chillers HTC e desumidificadores industriais fabricados pela Helioterm."
  },
  "header": {
    "nav": [
      {
        "label": "Conversa",
        "href": "#conversa"
      },
      {
        "label": "Equipamentos",
        "href": "#equipamentos"
      },
      {
        "label": "Formulário",
        "href": "#contato"
      }
    ],
    "whatsappCta": "Chamar no WhatsApp"
  },
  "hero": {
    "eyebrow": "Chiller Peças · chillers e desumidificadores fabricados pela Helioterm",
    "headline": "Precisa de chiller ou desumidificador industrial?",
    "subheadline": "Conte a sua aplicação em uma mensagem e a Chiller Peças indica o equipamento fabricado pela Helioterm.",
    "ctaLead": "Chiller ou desumidificador industrial",
    "primaryCta": "Chamar no WhatsApp",
    "secondaryCta": "Ver como funciona",
    "trust": [
      "Fabricante Helioterm",
      "Equipamentos e peças em um só lugar",
      "Entregas em nível nacional"
    ]
  },
  "chat": {
    "title": "Exemplo de conversa",
    "items": [
      {
        "from": "visitor",
        "text": "Preciso de um chiller para a minha máquina. Por onde começo?"
      },
      {
        "from": "chiller",
        "text": "Pela carga térmica. Com a aplicação, as temperaturas e a vazão, a nossa equipe técnica indica entre o HTC 03, o 05 e o 09 AR."
      },
      {
        "from": "visitor",
        "text": "E se eu não tiver todos os dados?"
      },
      {
        "from": "chiller",
        "text": "Mande o que tiver e conte qual é a máquina ou o processo. A gente ajuda a completar."
      },
      {
        "from": "visitor",
        "text": "Vocês têm desumidificador também?"
      },
      {
        "from": "chiller",
        "text": "Temos o dutado e o portátil, fabricados pela Helioterm. Conte o ambiente e a gente indica o formato."
      },
      {
        "from": "visitor",
        "text": "Quanto tempo leva para instalar o chiller?"
      },
      {
        "from": "chiller",
        "text": "O compacto é plug-and-play e vem carregado de fábrica. O fabricante cita 1 a 2 dias para instalar."
      },
      {
        "from": "visitor",
        "text": "Então como eu falo com vocês?"
      },
      {
        "from": "chiller",
        "text": "Chame no WhatsApp. É só tocar no botão."
      }
    ],
    "ctaAfterLead": "Chiller ou desumidificador industrial",
    "ctaAfter": "Chamar no WhatsApp"
  },
  "showcase": {
    "title": "Os equipamentos, em uma olhada",
    "intro": "Três chillers compactos e dois desumidificadores industriais.",
    "mergeInto": "chillers",
    "items": [
      {
        "name": "HTC 03 AR",
        "text": "2.100 a 4.410 kcal/h. Conexões de 1\" e 185 kg."
      },
      {
        "name": "HTC 05 AR",
        "text": "2.760 a 5.910 kcal/h. COP 1,72, mesmo gabinete do HTC 03."
      },
      {
        "name": "HTC 09 AR",
        "text": "5.720 a 11.100 kcal/h. COP 2,53 e conexões de 1 1/2\"."
      },
      {
        "name": "Desumidificador dutado",
        "text": "Ar tratado conduzido por dutos. Peça a capacidade para o seu ambiente."
      },
      {
        "name": "Desumidificador portátil",
        "text": "Para tratar o ar onde a umidade aparece. Peça a capacidade para o seu ambiente."
      }
    ]
  },
  "applications": {
    "title": "Onde esses equipamentos trabalham",
    "short": true,
    "items": [
      "Injetoras de plástico",
      "Máquinas CNC",
      "Laboratórios",
      "Soldagem a laser",
      "Salas de pintura industrial",
      "Armazéns e centros de distribuição"
    ]
  },
  "chillers": {
    "title": "Chillers HTC 03, 05 e 09 AR",
    "intro": "Mesmo gabinete de 605 x 905 x 1080 mm, compressor scroll e refrigerante R410A.",
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
      }
    ],
    "tableTitle": "Especificações técnicas por modelo",
    "tableNote": "Capacidade frigorífica em kcal/h (mínima a máxima). Alimentação trifásica 220/380/440 V, 60 Hz. Dados do fabricante Helioterm.",
    "cta": "Chamar no WhatsApp sobre chiller",
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
    "intro": "Umidade fora do ponto estraga produto e atrapalha o processo. Dutado e portátil fazem parte da oferta de desumidificação industrial fabricada pela Helioterm.",
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
    "cta": "Chamar no WhatsApp sobre desumidificador"
  },
  "sizing": {
    "omit": true,
    "title": "Quer adiantar a conversa? Estes dados ajudam",
    "intro": "Se tiver à mão, mande junto.",
    "inputs": [
      "Carga térmica da aplicação",
      "Temperaturas de entrada e de saída desejadas",
      "Vazão de líquido",
      "Ambiente de instalação (interno ou externo, temperatura local)",
      "Alimentação elétrica disponível (tensão e frequência)",
      "Para desumidificação: volume do ambiente e umidade relativa desejada"
    ],
    "note": "Não tem tudo? Mande o que tiver. Carga acima de 11.100 kcal/h (cerca de 3,7 TR)? A linha HTC segue até 73.200 kcal/h. Fale com a nossa equipe.",
    "cta": "Chamar no WhatsApp"
  },
  "whyUs": {
    "title": "Por que falar com a Chiller Peças",
    "intro": "Atendimento de quem entende de chiller e conversa de técnico para técnico.",
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
    "title": "Prefere escrever? Preencha o formulário",
    "intro": "Se o WhatsApp não for o seu canal, o formulário chega à mesma equipe.",
    "fields": {
      "name": {
        "label": "Nome",
        "required": true
      },
      "company": {
        "label": "Empresa (opcional)",
        "required": false
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
    "defaultMessage": "Olá, vim pela página da Chiller Peças (ref. v5). Preciso de chiller ou desumidificador industrial.",
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
    "v5: 'a gente indica' pressupõe equipe de atendimento no canal. Confirmar horário e tempo de resposta."
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
