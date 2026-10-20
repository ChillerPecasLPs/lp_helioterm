/**
 * Modelo: v3 "Escolha guiada"
 * Ângulo: o visitante escolhe o caso e recebe a indicação preliminar, em passos curtos, com a mensagem de WhatsApp já pronta.
 * Gatilho principal: compromisso e consistência (micro-compromisso) + efeito Zeigarnik (tarefa iniciada pede conclusão) + menos opções.
 * AIDA: Atenção = hero (pergunta) | Interesse = steps (passos) | Desejo = guide (resposta personalizada)
 *       | Ação = botão de WhatsApp (guide.whatsappTemplate) e formulário no fim.
 * Layout: o seletor (guide) deve ficar no hero.
 * ctaEcho curto, com a palavra-chave da headline: "Ver o equipamento certo".
 */

export const copy = {
  "variant": "v3",
  "aida": {
    "attention": "hero",
    "interest": "steps",
    "desire": "guide",
    "action": "guide.whatsappTemplate"
  },
  "ctaEcho": "Ver o equipamento certo",
  "meta": {
    "title": "Chiller ou desumidificador industrial: escolha o seu caso | Chiller Peças",
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
    "whatsappCta": "Chamar no WhatsApp"
  },
  "hero": {
    "eyebrow": "Chiller Peças · escolha guiada",
    "headline": "Qual é o equipamento certo para o seu caso?",
    "subheadline": "Escolha a sua aplicação. A página mostra se o caso pede chiller ou desumidificador e abre o WhatsApp com a mensagem pronta para a nossa equipe técnica.",
    "primaryCta": "Ver o equipamento certo",
    "secondaryCta": "Prefiro chamar no WhatsApp",
    "trust": [
      "Fabricante Helioterm",
      "Chillers HTC 03, 05 e 09 AR",
      "Desumidificadores dutado e portátil",
      "Entregas em nível nacional"
    ]
  },
  "steps": {
    "title": "Três passos",
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
    "note": "Para o front-end: exibir 'Passo 1 de 3' só depois da primeira escolha. O seletor fica no hero. Todas as indicações são preliminares.",
    "options": [
      {
        "id": "injetora",
        "label": "Injetora ou molde",
        "recommendation": "Chiller compacto HTC. A carga térmica define o modelo.",
        "reason": "Injetoras e refrigeração de moldes são aplicações dos chillers compactos Helioterm. A carga térmica indica o HTC 03 AR (2.100 a 4.410 kcal/h), o 05 AR (2.760 a 5.910 kcal/h) ou o 09 AR (5.720 a 11.100 kcal/h).",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: injetora de plástico ou refrigeração de moldes. Pode me indicar o equipamento?"
      },
      {
        "id": "cnc-laser",
        "label": "CNC ou laser",
        "recommendation": "Chiller compacto HTC. A carga térmica define o modelo.",
        "reason": "CNC e soldagem a laser estão entre as aplicações dos chillers compactos Helioterm. Mande a carga térmica e a nossa equipe técnica confirma o modelo.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: máquina CNC ou soldagem a laser. Pode me indicar o equipamento?"
      },
      {
        "id": "laboratorio",
        "label": "Laboratório ou médico",
        "recommendation": "Chiller compacto HTC. A carga térmica define o modelo.",
        "reason": "Laboratórios e equipamentos médicos também estão entre as aplicações dos chillers compactos. O gabinete de 605 x 905 x 1080 mm serve onde o espaço é limitado.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: laboratório ou equipamento médico. Pode me indicar o equipamento?"
      },
      {
        "id": "ambiente-umido",
        "label": "Umidade no ambiente",
        "recommendation": "Desumidificador industrial. Indicação preliminar: dutado.",
        "reason": "Para tratar o ar do ambiente. A nossa equipe técnica confirma o formato (dutado ou portátil) pela capacidade que você precisa.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: ambiente com umidade alta (sala de pintura, armazém ou câmara de cura). Pode me indicar o equipamento?"
      },
      {
        "id": "ponto-umido",
        "label": "Umidade em ponto isolado",
        "recommendation": "Desumidificador industrial. Indicação preliminar: portátil.",
        "reason": "Para tratar o ar em um ponto específico. A nossa equipe técnica confirma o formato (dutado ou portátil) pela capacidade que você precisa.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: ponto isolado com umidade (subestação ou sala de painéis). Pode me indicar o equipamento?"
      },
      {
        "id": "outro",
        "label": "Outro caso",
        "recommendation": "Conte o seu caso no WhatsApp.",
        "reason": "A nossa equipe técnica indica o equipamento a partir da sua descrição.",
        "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: outro caso (vou descrever aqui). Pode me indicar o equipamento?"
      }
    ],
    "whatsappTemplate": "Olá, vim pela página da Chiller Peças (ref. v3). Meu caso: {caso}. Equipamento indicado: {equipamento}. Pode me ajudar?",
    "incomplete": "Escolha o seu caso para ver o equipamento indicado.",
    "done": "Pronto. Envie a mensagem e a nossa equipe técnica continua daqui."
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
    "cta": "Pedir desumidificador no WhatsApp"
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
    "note": "Não tem todos os dados à mão? Mande o que tiver. Carga acima de 11.100 kcal/h (cerca de 3,7 TR)? A linha HTC segue até 73.200 kcal/h. Fale com a nossa equipe.",
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
    "title": "Seu caso não está na lista? Conte pelo formulário",
    "intro": "Descreva a aplicação e a nossa equipe técnica indica o equipamento.",
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
    "privacyHref": "/privacidade"
  },
  "whatsapp": {
    "defaultMessage": "Olá, vim pela página da Chiller Peças (ref. v3) e quero ver o equipamento certo para o meu caso.",
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
    "v3: a associação aplicação -> equipamento (CNC, laser, laboratório e médico para chiller; umidade no ambiente para dutado; ponto isolado para portátil) é indicação preliminar de copy, baseada nas listas de aplicações do site Helioterm. Confirmar com a equipe técnica."
  ],
  "pending": [
    "Dutado: capacidade (L/dia), vazão de ar, potência total, dimensões, peso, ruído. A CONFIRMAR",
    "Portátil: capacidade (L/dia), vazão de ar, potência total, dimensões, peso, ruído. A CONFIRMAR",
    "Prazo de entrega por região. A CONFIRMAR",
    "Condições comerciais e faturamento. A CONFIRMAR",
    "Número e link do WhatsApp comercial.",
    "Página de privacidade (/privacidade): ainda não existe.",
    "CNPJ, razão social e endereço (saíram do rodapé; incluir quando confirmados).",
    "Oferta de catálogo, manual e termo de garantia pela Chiller Peças.",
    "Fotos dos equipamentos e confirmação do uso dos renders.",
    "Destino do formulário (e-mail ou CRM).",
    "Aprovação dos nomes 'dutado' e 'portátil' como nomes de produto."
  ]
} as const;
