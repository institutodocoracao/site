// Gerado a partir do conteúdo original do site (legacy-static/) — revisado manualmente.
// Não reescreva o texto clínico sem validar com o time médico da clínica.

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type ServiceCategory = "especialidade" | "exame";

export interface ServiceEntry {
  slug: string;
  category: ServiceCategory;
  title: string;
  image: string;
  imageAlt: string;
  content: ContentBlock[];
}

export const services: ServiceEntry[] = [
  {
    "slug": "clinica-medica",
    "category": "especialidade",
    "title": "Clínica Médica",
    "image": "/images/exames/clinica-medica.jpeg",
    "imageAlt": "Clínica Médica",
    "content": [
      {
        "type": "paragraph",
        "text": "Voltada para o estudo, prevenção e tratamento das doenças do coração, a Cardiologia trata de doenças como Insuficiência Cardíaca, Miocardite, Arritmias, entre outras que atingem milhares de pessoas no mundo todo, incluindo bebês. As patologias podem surgir nas primeiras semanas de vida ou se desenvolverem com o tempo."
      },
      {
        "type": "paragraph",
        "text": "Quando o assunto é coração, todo cuidado é pouco. Além de cuidar da saúde de forma habitual, para viver uma vida de forma plena é necessário realizar exames e consultas para verificar como está o funcionamento do sistema circulatório. É aí que entra o Médico Cardiologista, o responsável por cuidar do músculo mais importante do nosso corpo: o coração."
      },
      {
        "type": "paragraph",
        "text": "O profissional da área da Cardiologia é extremamente importante quando o assunto é saúde do coração, já que se dedica com muita responsabilidade na avaliação e no diagnóstico de todo o sistema circulatório. Além disso, há várias especialidades dentro da área que são muito interessantes para entender melhor sobre o trabalho desses profissionais e para obter um conhecimento mais amplo sobre esse assunto."
      }
    ]
  },
  {
    "slug": "ergometria",
    "category": "especialidade",
    "title": "Ergometria / Teste Ergométrico",
    "image": "/images/exames/ergometria.jpg",
    "imageAlt": "Ergometria",
    "content": [
      {
        "type": "paragraph",
        "text": "O Teste Ergométrico é uma prova médica não invasiva, utilizada no diagnóstico de afecções cardiovasculares, bem como na avaliação terapêutica e para fins de condicionamento físico e de reabilitação."
      },
      {
        "type": "paragraph",
        "text": "No âmbito dos métodos diagnósticos é a prova funcional de escolha na detecção de isquemia miocárdica (insuficiência coronária). Tem como aplicações principais:"
      },
      {
        "type": "list",
        "items": [
          "A avaliação diagnóstica e prognóstica de indivíduos com suspeita ou portadores de doença coronária obstrutiva",
          "De populações sadias com programação para prática de atividade física, caracterizando a capacidade funcional",
          "Outras doenças cardíacas, como valvopatias, miocardiopatias, para esclarecer o grau de limitação funcional, objetivando segmento e estratificação de risco",
          "Nas diferentes arritmias e distúrbios de condução de estímulo e na avaliação adicional de hipertensão arterial"
        ]
      },
      {
        "type": "paragraph",
        "text": "É um exame que emprega a realização de esforço físico dinâmico programado, com a finalidade de evidenciar alterações cardiovasculares em exercícios que porventura não estejam presentes em repouso. Tem como aplicações principais:"
      },
      {
        "type": "list",
        "items": [
          "A avaliação diagnóstica e prognóstica de indivíduos com suspeita ou portadores de doença coronária obstrutiva",
          "Doenças cardíacas, para esclarecer o grau de limitação funcional, objetivando segmento e estratificação de risco",
          "Nas diferentes arritmias e distúrbios de condução do estímulo; Na avaliação adicional da hipertensão arterial"
        ]
      },
      {
        "type": "heading",
        "text": "Importante"
      },
      {
        "type": "paragraph",
        "text": "Para pacientes com menos de 18 anos: o exame somente será realizado mediante a presença de um acompanhante adulto."
      },
      {
        "type": "heading",
        "text": "Medicações"
      },
      {
        "type": "paragraph",
        "text": "Suspender medicamentos somente com autorização do médico"
      }
    ]
  },
  {
    "slug": "arritmologia",
    "category": "especialidade",
    "title": "Arritmologia",
    "image": "/images/exames/arritmologia.png",
    "imageAlt": "Arritmologia",
    "content": [
      {
        "type": "paragraph",
        "text": "O arritmologista é um cardiologista com especialização no tratamento de arritmias cardíacas. Arritmia cardíaca é todo o conjunto de perturbações do ritmo normal do coração que são subdivididas em taquicardias (acelerações dos batimentos) e bradicardias (lentificações dos batimentos), que também podem ocorrer com frequência cardíaca normal (nem lentas, nem aceleradas). Esta última é caracterizada por irregularidades da frequência cardíaca."
      },
      {
        "type": "paragraph",
        "text": "As arritmias cardíacas podem ser assintomáticas ou provocar sintomas que variam desde palpitações, tonturas e desmaios. Elas variam muito quanto à gravidade, desde aquelas que são consideradas benignas e não requerem nenhum tratamento específico até arritmias malignas, que requerem tratamento medicamentoso ou implante de dispositivos eletrônicos como o marcapasso, cardiodesfibrilador (CDI) e o ressincronizador, sendo este utilizado no tratamento de insuficiência cardíaca."
      },
      {
        "type": "paragraph",
        "text": "O cardiologista especializado em arritmia é o profissional mais indicado para diagnosticar e tratar doenças de arritmias cardíacas."
      }
    ]
  },
  {
    "slug": "cardiologia-do-esporte",
    "category": "especialidade",
    "title": "Cardiologia do Esporte",
    "image": "/images/exames/cardiologia-do-esporte.jpeg",
    "imageAlt": "Cardiologia do Esporte",
    "content": [
      {
        "type": "paragraph",
        "text": "A cardiologia esportiva se caracteriza pela avaliação do desempenho, do risco cardíaco e da função do coração durante o exercício. A prática contínua de atividade física diminui a taxa de morte, protege contra inúmeras doenças, além de melhorar os níveis de pressão arterial, diabetes, colesterol entre outros."
      },
      {
        "type": "paragraph",
        "text": "No entanto, todos já ouvimos falar sobre algum atleta que faleceu praticando algum tipo de exercício. Na realidade, a maioria absoluta de mortes durante o esporte são totalmente previníveis através de uma consulta antes de se iniciar ou de se intensificar um treinamento."
      },
      {
        "type": "paragraph",
        "text": "Na maioria das vezes o atleta apresentava alguma doença, muitas vezes desconhecida por ele, que não estava sendo tratada e nem acompanhada e então apresentou o problema durante a atividade física e não devido ao exercício."
      },
      {
        "type": "paragraph",
        "text": "Através da cardiologia esportiva podemos orientar sobre quais as melhores práticas para controle de fatores de risco, além de orientar como devem ser feitos os exercícios em pessoas portadoras de algum tipo de doença como arritmias, insuficiência cardíaca, angina entre outras."
      },
      {
        "type": "paragraph",
        "text": "Além disso, a cardiologia esportiva oferece a possibilidade de se conhecer a faixa ideal dos batimentos cardíacos durante o exercício e, com isso, determinar qual a melhor faixa de treinamento tanto para fortalecer o coração, aumentar o desempenho e a faixa ideal para a queima de gordura corporal."
      },
      {
        "type": "paragraph",
        "text": "Portanto, a avaliação de um cardiologista esportivo, que conheça as adaptações cardiológicas do exercício, é muito importante para se atingir os objetivos de performance, saúde, controle de doenças de forma segura e com maiores resultados."
      },
      {
        "type": "heading",
        "text": "Atribuições de um cardiologista esportivo"
      },
      {
        "type": "list",
        "items": [
          "Avaliar o coração durante o exercício",
          "Determina faixa ideal de treinamento (perda de peso, performance etc.)",
          "Orientar como deve ser o treinamento para controle de fatores de risco (pressão alta, colesterol alto, diabetes entre outras)",
          "Check-up cardiológico",
          "Fornecer atestados para a prática de esportiva (inclusive com possíveis restrições decorrentes de doenças prévias)",
          "Orientar ações para a melhora de performance do coração e do exercício"
        ]
      }
    ]
  },
  {
    "slug": "ecodoplercardiografia",
    "category": "especialidade",
    "title": "Ecodopplercardiografia",
    "image": "/images/exames/ecodopplercardiografia.jpg",
    "imageAlt": "Ecodopplercardiografia",
    "content": [
      {
        "type": "paragraph",
        "text": "Ecodopplercardiograma é um exame ultrassonográfico cardiológico completo capaz de fornecer as medidas das cavidades cardíacas, avaliar a função do coração e analisar as velocidades do fluxo sanguíneo de forma não invasiva. Com ele, é possível diagnosticar diversas doenças cardiológicas."
      },
      {
        "type": "heading",
        "text": "O QUE É ECODOPPLERCARDIOGRAMA?"
      },
      {
        "type": "paragraph",
        "text": "O ecodopplercardiograma, ou Ecocardiograma com Doppler, é um exame ultrassonográfico do coração, que avalia o tamanho das cavidades cardíacas, a contração cardíaca, e, com a ajuda do recurso do Doppler, o fluxo de sangue através das suas válvulas."
      },
      {
        "type": "heading",
        "text": "O QUE É DOPPLER?"
      },
      {
        "type": "paragraph",
        "text": "O doppler é um recurso técnico que permite avaliar a velocidade das estruturas e dos fluxos no interior do coração, servindo para verificar o bom funcionamento das valvas e as pressões no interior das cavidades."
      },
      {
        "type": "heading",
        "text": "PARA QUE SERVE O EXAME?"
      },
      {
        "type": "paragraph",
        "text": "O exame tem como objetivo avaliar o tamanho das cavidades cardíacas, espessura das paredes, contração cardíaca, o bom funcionamento das valvas do coração e dos demais fluxos e pressões intracardíacas."
      },
      {
        "type": "heading",
        "text": "COMO O EXAME DE ECODOPPLERCARDIOGRAMA É FEITO?"
      },
      {
        "type": "paragraph",
        "text": "O procedimento é feito com o paciente deitado em uma maca de exame, com lateralizações do toráx para uma melhor análise."
      },
      {
        "type": "paragraph",
        "text": "Ecocardiograma transtorácico, o mais comumente realizado, não requer jejum e se assemelha a um exame de ultrassom. O tórax é examinado com uso de um instrumento chamado transdutor, e requer a utilização de um gel próprio para exames de ultrassom, proporcionando uma melhor visualização das estruturas cardíacas."
      },
      {
        "type": "heading",
        "text": "QUAIS SÃO AS DIFERENÇAS ENTRE O ECODOPPLERCARDIOGRAMA E O ECOCARDIOGRAMA?"
      },
      {
        "type": "paragraph",
        "text": "Não há diferença prática, uma vez que todo ecocardiograma requer o uso do recurso do Doppler para uma análise completa. Tratam-se apenas de nomenclaturas distintas para o mesmo exame."
      },
      {
        "type": "heading",
        "text": "ECODOPPLERCARDIOGRAMA FETAL"
      },
      {
        "type": "paragraph",
        "text": "Ecodopplercardiograma fetal é o exame ultrassonográfico do coração do bebê, realizado a partir da 18ª semana de gestação, idealmente na 28ª semana, para analisar a morfologia e funcionamento cardíacos."
      },
      {
        "type": "heading",
        "text": "ECODOPPLERCARDIOGRAMA TRANSTORÁCICO"
      },
      {
        "type": "paragraph",
        "text": "É o ecocardiograma mais comum, realizado como um ultrassom do coração obtido através do tórax."
      },
      {
        "type": "heading",
        "text": "ECODOPPLERCARDIOGRAMA COLORIDO"
      },
      {
        "type": "paragraph",
        "text": "Uma das formas de avaliação do efeito Doppler é pelo uso de cores, e este recurso é utilizado em todos os exames de ecocardiograma. Desta forma, o Ecodopplercardiograma colorido é a denominação usual do Ecocardiograma transtorácico, que é o mais comumente solicitado na prática clínica."
      },
      {
        "type": "heading",
        "text": "ECODOPPLERCARDIOGRAMA COM ESTRESSE FARMACOLÓGICO"
      },
      {
        "type": "paragraph",
        "text": "O Ecocardiograma com estresse farmacológico é um exame específico, feito em apenas unidades ambulatoriais de referência ou ambientes hospitalares, onde o coração é testado após a injeção de medicações específicas que monitoram a sua função, ou a modificação de fluxos no seu interior. Sua mais frequente indicação é a avaliação de isquemia, sendo um teste funcional de grande importância na investigação de doença arterial coronária com significado funcional."
      }
    ]
  },
  {
    "slug": "eletrocardiografia",
    "category": "exame",
    "title": "ECG (Eletrocardiograma)",
    "image": "/images/exames/ecg.jpeg",
    "imageAlt": "Eletrocardiografia",
    "content": [
      {
        "type": "paragraph",
        "text": "Eletrocardiograma (ou ECG) é um exame que avalia o ritmo do coração e mede seus batimentos por minuto. Esta medição é feita através de eletrodos que são fixados na pele do paciente e se comunicam com o eletrocardiógrafo, que é o aparelho que registra todos estes dados. O ECG é um teste de diagnóstico importante para a detecção e acompanhamento de diversas doenças cardiovasculares."
      },
      {
        "type": "paragraph",
        "text": "O método de ECG mais comum é o de repouso, que é feito com o paciente deitado e descansado e é utilizado para registrar os batimentos cardíacos. Para que a captação destes dados dê certo, os eletrodos são fixados diretamente na pele do paciente (que deve estar limpa) e são espalhados pelas regiões do peito, punhos e tornozelos. Além deste método, também existem os testes ergométrico, cardiopulmonar e holter 24h."
      },
      {
        "type": "paragraph",
        "text": "Os dados do exame são registrados, normalmente, em um papel milimetrado, e a partir deles, o cardiologista interpreta as ondas do gráfico, identificando marcadores como cadência e frequência cardíaca, possibilitando o diagnóstico do paciente. Existem aparelhos que possuem impressoras para que o registro seja impresso naquele instante, e outros que enviam os dados a um dispositivo, como tablets, smartphones e computadores, possibilitando a impressão dos registros em outro momento, exportação para telemedicina ou envio para outro profissional."
      },
      {
        "type": "paragraph",
        "text": "O exame é simples, nada invasivo, rápido e indolor. Num geral, ele costuma durar entre 5 e 10 minutos e a única coisa que se sente são os pequenos beliscões no momento em que os eletrodos são desafixados da pele."
      },
      {
        "type": "paragraph",
        "text": "A escolha por um bom equipamento pode influenciar no modo de visualização, duração, qualidade e quantidade de canais registrados. Por isso, a ProLife, conta com uma linha completa de eletrocardiógrafos de mesa e com o HD+, um eletrocardiógrafo digital totalmente portátil. Deste modo, conseguimos atender a todos os tipos de necessidade e oferecer equipamentos de alta qualidade, facilitando o trabalho do médico cardiologista."
      }
    ]
  },
  {
    "slug": "ecocardiografia",
    "category": "exame",
    "title": "Ecocardiograma Transtorácico",
    "image": "/images/exames/ecocardiograma.jpeg",
    "imageAlt": "Ecocardiografia",
    "content": [
      {
        "type": "paragraph",
        "text": "Como é feito e para que serve:"
      },
      {
        "type": "paragraph",
        "text": "Cuidar do coração, um dos principais órgãos do corpo humano, pode parecer assunto de quem já chegou na melhor idade. E não sem razão: as doenças cardiovasculares são a principal causa de morte de homens e mulheres acima dos 65 anos. Porém o pedido de ecocardiograma não significa que o paciente tenha algo grave."
      },
      {
        "type": "paragraph",
        "text": "Altamente eficaz na detecção de diversas doenças, o exame também é muito importante na prevenção e monitoramento da saúde durante várias fases da vida, inclusive na gestação. Existem vários tipos de ecocardiograma – transtorácico, fetal, transesofágico, sob estresse e com doppler – , que podem ser tanto bidimensionais quanto tridimensionais."
      },
      {
        "type": "paragraph",
        "text": "Por não ser um procedimento invasivo, ele é simples e indolor."
      }
    ]
  },
  {
    "slug": "holter-24h",
    "category": "exame",
    "title": "Holter 24h",
    "image": "/images/exames/holter24h.jpeg",
    "imageAlt": "Holter 24h",
    "content": [
      {
        "type": "heading",
        "text": "O QUE É E PARA QUE SERVE O HOLTER?"
      },
      {
        "type": "paragraph",
        "text": "Manter a saúde em dia e realizar o acompanhamento periódico através de consultas regulares e exames de check-up permite o diagnóstico precoce de doenças e a identificação de fatores de risco."
      },
      {
        "type": "paragraph",
        "text": "Para avaliar a saúde do coração durante os exames de check-up pode ser solicitado o exame Holter, que consiste em um eletrocardiograma contínuo e portátil por 24 h. A finalidade deste exame é identificar distúrbios do ritmo cardíaco nas atividades diárias do paciente."
      },
      {
        "type": "heading",
        "text": "O QUE É HOLTER 24 HORAS?"
      },
      {
        "type": "paragraph",
        "text": "O exame Holter, diferentemente dos demais exames cardiológicos que são realizados em alguns minutos, é feito em no mínimo 24 horas."
      },
      {
        "type": "paragraph",
        "text": "Um monitor é colocado na cintura do paciente, de forma não invasiva, por 24 horas ou mais. A finalidade do exame é detectar, registrar, quantificar e calcular a variação do ritmo cardíaco durante as atividades diárias habituais do paciente."
      },
      {
        "type": "heading",
        "text": "QUANDO O EXAME HOLTER É INDICADO?"
      },
      {
        "type": "paragraph",
        "text": "O exame Holter pode ser indicado nas seguintes situações:"
      },
      {
        "type": "list",
        "items": [
          "Exames de check-up",
          "Acompanhar pacientes que possuem marcapasso ou o diagnóstico de alguma doença cardíaca",
          "Exame complementar a outros exames cardiológicos",
          "Avaliar pacientes com queixas de tontura, palpitação e falta de ar",
          "Suspeita de arritmias cardíacas"
        ]
      },
      {
        "type": "heading",
        "text": "QUAIS DOENÇAS CARDÍACAS PODEM SER DIAGNOSTICADAS COM O HOLTER?"
      },
      {
        "type": "paragraph",
        "text": "Por ser um exame que acompanha o paciente durante o dia, ele é capaz de diagnosticar doenças cardíacas como:"
      },
      {
        "type": "list",
        "items": [
          "Fibrilação atrial",
          "Taquicardia paroxística supraventricular",
          "Taquicardia multifocal",
          "Bradicardia",
          "Isquemia cardíaca"
        ]
      },
      {
        "type": "heading",
        "text": "COMO É FEITO O EXAME HOLTER 24H?"
      },
      {
        "type": "paragraph",
        "text": "O exame Holter é feito de forma não invasiva, seguindo os passos abaixo:"
      },
      {
        "type": "list",
        "items": [
          "São colocados 3 a 8 eletrodos no tórax do paciente",
          "O receptor é colocado na cintura do paciente ou pode ser levado no bolso",
          "O paciente é orientado registrar os horários de suas atividades diárias e quaisquer sintomas",
          "Após 24 horas, o paciente deve voltar a clínica para a retirada dos eletrodos e do receptor"
        ]
      },
      {
        "type": "heading",
        "text": "HOLTER 24H NECESSITA JEJUM?"
      },
      {
        "type": "paragraph",
        "text": "Não há necessidade de fazer jejum para realizar esse exame."
      },
      {
        "type": "heading",
        "text": "QUE ROUPA USAR PARA FAZER O HOLTER?"
      },
      {
        "type": "paragraph",
        "text": "Não há uma roupa específica para fazer o exame. Mas, para maior conforto, recomenda-se que evitem-se camisas ou blusas justas e vestidos (mulheres) e que se traga um cinto, se possível, para adaptação do aparelho."
      },
      {
        "type": "heading",
        "text": "RECOMENDAÇÕES ADICIONAIS"
      },
      {
        "type": "paragraph",
        "text": "É importante se atentar a alguns cuidados antes de realizar o exame:"
      },
      {
        "type": "paragraph",
        "text": "Tomar banho no dia do exame. Não usar cremes no corpo. Se tiver macapasso, trazer o cartão de informações. Evitar a exposição à luz solar após o exame."
      },
      {
        "type": "heading",
        "text": "QUANTO TEMPO DEMORA O RESULTADO?"
      },
      {
        "type": "paragraph",
        "text": "O resultado pode variar de 5 a 7 dias para sair."
      },
      {
        "type": "heading",
        "text": "PERIODICIDADE DO EXAME"
      },
      {
        "type": "paragraph",
        "text": "Há periodicidade do exame pode variar, dependendo do diagnóstico."
      },
      {
        "type": "paragraph",
        "text": "Caso o exame tenha sido pedido por check-up ele pode ser realizado anualmente. Em outros casos, pode ser solicitado mensalmente para ajuste de doses de medicamentos ou para acompanhar pacientes que possuem marcapasso."
      },
      {
        "type": "heading",
        "text": "COMO SABER SE O HOLTER ESTÁ FUNCIONANDO?"
      },
      {
        "type": "paragraph",
        "text": "Toda vez que o receptor realiza a leitura do ritmo cardíaco, emite um som indicando que o aparelho está funcionando como deveria."
      },
      {
        "type": "heading",
        "text": "COMO ENTENDER OS RESULTADOS DO EXAME HOLTER?"
      },
      {
        "type": "paragraph",
        "text": "Os resultados do exame podem ser normais ou alterados. Os resultados devem ser levados para seu médico para que ele interprete e prescreva o melhor tratamento ou a complementação diagnóstica através de novos exames como o ecocardiograma."
      },
      {
        "type": "paragraph",
        "text": "No resultado do exame é analisado o ritmo do coração, frequência cardíaca e a presença de arritmias, bloqueios cardíacos e isquemia, sendo que apenas o médico pode dar o diagnóstico final."
      }
    ]
  },
  {
    "slug": "mapa-24h",
    "category": "exame",
    "title": "Mapa 24h",
    "image": "/images/exames/mapa24h.jpeg",
    "imageAlt": "Mapa 24h",
    "content": [
      {
        "type": "paragraph",
        "text": "O exame MAPA é um excelente auxiliador no monitoramento da pressão arterial e pode prevenir graves doenças. Entenda mais sobre como funciona."
      },
      {
        "type": "heading",
        "text": "O QUE É E PARA QUE SERVE O EXAME MAPA?"
      },
      {
        "type": "paragraph",
        "text": "A Monitorização Ambulatorial da Pressão Arterial (MAPA) é um exame que permite o registro indireto e intermitente da pressão arterial durante 24 horas, enquanto o paciente realiza suas atividades habituais e também durante o sono."
      },
      {
        "type": "heading",
        "text": "O QUE É MAPA 24 HORAS?"
      },
      {
        "type": "paragraph",
        "text": "É um exame que pode fazer parte da lista dos exames de check-up. Consiste na instalação de um aparelho no paciente, cujo objetivo é monitorar a pressão arterial a cada 20 minutos durante 24 horas seguidas."
      },
      {
        "type": "heading",
        "text": "QUAIS OS TIPOS DE APARELHOS PARA REALIZAÇÃO DO EXAME MAPA?"
      },
      {
        "type": "paragraph",
        "text": "Para realizar o exame, é instalado um manguito para medida da pressão arterial no braço do paciente. Esse manguito é acoplado a um pequeno gravador, que fica na cintura ou em uma pequena bolsa."
      },
      {
        "type": "paragraph",
        "text": "O manguito deve ser sempre colocado no braço. Não existe validação para medição da pressão arterial em outros locais."
      },
      {
        "type": "heading",
        "text": "QUANDO O EXAME MAPA É INDICADO?"
      },
      {
        "type": "paragraph",
        "text": "Além do check up, o exame costuma ser indicado nos seguintes casos (entre outros):"
      },
      {
        "type": "list",
        "items": [
          "Suspeita de hipertensão",
          "Avaliação do tratamento da hipertensão",
          "Avaliação de sintomas possivelmente relacionados à alterações da pressão arterial"
        ]
      },
      {
        "type": "heading",
        "text": "COMO É FEITO O EXAME DO MAPA?"
      },
      {
        "type": "paragraph",
        "text": "É um exame muito simples, que consiste apenas na instalação do equipamento no braço do paciente, onde permanecerá por 24 horas. Após esse período, o paciente deverá retornar ao laboratório para retirar o aparelho de monitoramento."
      },
      {
        "type": "paragraph",
        "text": "É importante que o paciente mantenha suas atividades rotineiras, para que seja possível obter o melhor resultado do exame."
      },
      {
        "type": "heading",
        "text": "MAPA 24H NECESSITA JEJUM?"
      },
      {
        "type": "paragraph",
        "text": "Não é necessário jejum para realizar o MAPA."
      },
      {
        "type": "heading",
        "text": "QUANTO TEMPO DEMORA O RESULTADO?"
      },
      {
        "type": "paragraph",
        "text": "O tempo para o MAPA ficar pronto varia de 4 a 7 dias."
      },
      {
        "type": "heading",
        "text": "CONTRAINDICAÇÕES PARA REALIZAR O MAPA"
      },
      {
        "type": "paragraph",
        "text": "O MAPA pode apresentar limitações em pacientes que apresentem arritmias cardíacas frequentes e parkinsonismo acentuado, pela dificuldade na leitura da pressão arterial . Em pacientes com inchaço no braço, mastectomia ou fístula para diálise bilateralmente, o exame não deve ser realizado."
      },
      {
        "type": "heading",
        "text": "PERIODICIDADE DO EXAME"
      },
      {
        "type": "paragraph",
        "text": "A periodicidade do exame deve ser definida por um médico especialista, dependendo de cada caso."
      },
      {
        "type": "heading",
        "text": "PRINCIPAIS DÚVIDAS SOBRE O EXAME MAPA"
      },
      {
        "type": "heading",
        "text": "EXAME MAPA PODE TOMAR BANHO?"
      },
      {
        "type": "paragraph",
        "text": "Não se deve tomar banho, pois o manguito não deve ser retirado do braço e o gravador não pode molhar."
      },
      {
        "type": "heading",
        "text": "O PACIENTE PODE DIRIGIR DEPOIS DO EXAME?"
      },
      {
        "type": "paragraph",
        "text": "Sim. O ideal é que o paciente siga sua rotina normalmente, mesmo com o aparelho no braço."
      },
      {
        "type": "heading",
        "text": "QUAL A DIFERENÇA ENTRE O HOLTER E O MAPA?"
      },
      {
        "type": "paragraph",
        "text": "O exame Holter consiste em registrar a atividade elétrica do coração e suas variações no período de 24 horas, para detectar eventuais arritmias."
      },
      {
        "type": "paragraph",
        "text": "Já o MAPA é utilizado para monitorar a pressão arterial e suas variações em 24h."
      },
      {
        "type": "heading",
        "text": "PODE TIRAR O APARELHO DO MAPA PARA TOMAR BANHO?"
      },
      {
        "type": "paragraph",
        "text": "Não, o aparelho deve ser instalado e desinstalado por profissionais especializados."
      },
      {
        "type": "heading",
        "text": "COMO DORMIR COM O APARELHO DE MAPA?"
      },
      {
        "type": "paragraph",
        "text": "O paciente deverá dormir do lado contrário que está instalado o aparelho, pois isso pode afetar o procedimento e incomodar o paciente."
      },
      {
        "type": "heading",
        "text": "QUAIS INFORMAÇÕES SOBRE O MAPA DEVO COLOCAR NO DIÁRIO?"
      },
      {
        "type": "paragraph",
        "text": "O diário de atividades fornecido ao paciente, deverá ser preenchido com os horários em que dormiu, acordou, comeu e também com eventuais sintomas e atividades."
      },
      {
        "type": "heading",
        "text": "PODE-SE FAZER HOLTER E MAPA NO MESMO DIA?"
      },
      {
        "type": "paragraph",
        "text": "O exame Holter e o MAPA podem ser feitos simultaneamente, utilizando-se apenas um gravador que registra o ritmo cardíaco e a pressão arterial. Entretanto, a presença de dois equipamentos pode potencializar o desconforto do exame."
      }
    ]
  },
  {
    "slug": "teste-ergometrico-computadorizado",
    "category": "exame",
    "title": "Teste Ergométrico",
    "image": "/images/exames/teste-ergometrico-computadorizado.jpeg",
    "imageAlt": "Teste Ergométrico Computadorizado",
    "content": [
      {
        "type": "paragraph",
        "text": "Consiste na monitorização do coração durante atividade física controlada."
      },
      {
        "type": "paragraph",
        "text": "Verificam-se os sintomas, os comportamentos da pressão arterial, da freqüência cardíaca e do eletrocardiograma em repouso, durante e após o esforço, até o retorno aos padrões próximos ao pré-esforço. O exercício é realizado em esteira, segundo protocolo pré-definido de acordo com o sexo, a idade e a capacidade do paciente de se exercitar, avaliada através de perguntas sobre sua atividade física."
      },
      {
        "type": "paragraph",
        "text": "Também conhecido por: ECG de esforço, teste de esforço, prova de esforço, teste de esteira."
      },
      {
        "type": "paragraph",
        "text": "Requer preparo especial e traje adequado."
      },
      {
        "type": "paragraph",
        "text": "É totalmente indolor e conduzido pelo próprio paciente quanto a intensidade do esforço realizado."
      },
      {
        "type": "paragraph",
        "text": "Resultado entregue no mesmo dia após o término do exame."
      }
    ]
  },
  {
    "slug": "avaliacao-de-marca-passo",
    "category": "exame",
    "title": "Avaliação de Marca Passo",
    "image": "/images/exames/marca-passo.jpeg",
    "imageAlt": "Avaliação de Marca Passo",
    "content": [
      {
        "type": "paragraph",
        "text": "A avaliação do marcapasso é feita em consultório, não necessita de internação e não causa dor ou desconforto ao paciente."
      },
      {
        "type": "paragraph",
        "text": "No exame o paciente é deitado numa maca e um dispositivo é colocado sobre a região na qual está implantado o marcapasso. A partir daí, as informações do dispositivo são lidas por telemetria e o analisador realiza a leitura das informações registradas na memória interna do dispositivo."
      },
      {
        "type": "paragraph",
        "text": "Nessa avaliação são vistos: níveis de bateria, necessidade de reprogramação, identifica eventos arrítmicos e detecta o funcionamento adequado ou não do marcapasso. Esses dados são importantes para a programação e o funcionamento do equipamento. Ao final da avaliação, um relatório é impresso."
      },
      {
        "type": "paragraph",
        "text": "Normalmente, o equipamento é programado de acordo com o perfil do paciente, como a idade, o sexo, o estilo de vida e a doença que ocasionou a implantação do aparelho."
      },
      {
        "type": "paragraph",
        "text": "A primeira avaliação é realizada normalmente 30 dias após a cirurgia do implante. Dependendo do resultado, as avaliações seguintes são marcadas."
      },
      {
        "type": "paragraph",
        "text": "Geralmente no primeiro ano do implante as avaliações são trimestrais e a partir do segundo ano são semestrais."
      }
    ]
  },
  {
    "slug": "doppler-de-carotida",
    "category": "exame",
    "title": "Doppler de Carótida",
    "image": "/images/exames/doppler-carotida.jpeg",
    "imageAlt": "Doppler de Carótida",
    "content": [
      {
        "type": "paragraph",
        "text": "Doppler de carótidas: o exame indicado para avaliar e prevenir o risco de AVC Exame investiga estreitamento e entupimento de artérias carótidas"
      },
      {
        "type": "paragraph",
        "text": "De acordo com dados do Ministério da Saúde, entre 2010 e 2018, mais de 60 mil brasileiros com menos de 45 anos foram vítimas de acidente vascular cerebral (AVC) no país. Esses eventos estão associados a vários fatores, principalmente a obesidade, tabagismo, sedentarismo, diabetes, colesterol alto ou questões genéticas. No entanto, na atualidade a medicina possibilita uma série de formas de evitar a ocorrência de Doenças Crônicas Não-Transmissíveis através de métodos de prevenção que podem ser orientados a partir da avaliação de riscos, identificados através de exames. No caso do AVC, por exemplo, o exame conhecido como Doppler de Carótidas pode salvar muitas vidas ou, ao menos, minimizar as sequelas através de um acompanhamento médico precoce."
      },
      {
        "type": "paragraph",
        "text": "Nesse texto, vamos ajudá-lo a entender mais sobre esse importante exame, qual sua finalidade e como é realizado."
      },
      {
        "type": "heading",
        "text": "O que é o Doppler de carótidas?"
      },
      {
        "type": "paragraph",
        "text": "O Doppler de carótidas é um exame de ultrassonografia com doppler colorido que é realizada sobre as artérias carótidas. Isto é, trata-se de um método diagnóstico que utiliza-se do eco produzido pelo som para criar imagens em tempo real das estruturas e órgãos internos."
      },
      {
        "type": "paragraph",
        "text": "As carótidas são artérias muito importantes para conduzir a passagem do fluxo sanguíneo do coração para o cérebro e estão localizadas na região do pescoço. Nesse sentido, pode se dizer que este é um canal, passível de obstrução ou fechamento parcial a medida que placas de gordura ou tecidos fibrosos se acumulam em suas paredes. A obstrução do fluxo sanguíneo do coração ao cérebro provoca o risco de AVC, podendo ocasionar o óbito da vítima ou sequelas."
      },
      {
        "type": "paragraph",
        "text": "Assim, o Doppler de Carótidas possibilita que o médico radiologista consiga observar com muita precisão o aspecto dessas artérias, avaliando a aterosclerose da artéria carótida, ou melhor as obstruções, ou espessura das placas de ateroma (gordura), assim como velocidade do fluxo de sangue que passa pela região."
      },
      {
        "type": "heading",
        "text": "Qual a indicação desse exame e como é realizado?"
      },
      {
        "type": "paragraph",
        "text": "De forma geral, sintomas como desmaios e tontura devem ser investigados por um neurologista, médico que poderá solicitar o exame de doppler de carótidas. Entretanto, pacientes assintomáticos que realizam check ups anuais e apresentarem alto índice de gordura no sangue, devem procurar um profissional que investigará a necessidade de realização desse exame."
      },
      {
        "type": "paragraph",
        "text": "Portanto, o objetivo do exame é observar se o paciente tem maiores riscos de ter um derrame (AVC), se há oclusão da placa ou coagulos no sangue, se a artéria está se estreitando, entre outras condições."
      },
      {
        "type": "paragraph",
        "text": "Doppler de carótidas possibilita investigar oclusão ou estreitamento das artérias carótidas O exame é indolor, rápido, não invasivo e não exige qualquer preparação do paciente. O aparelho será conduzido sobre a artéria localizada no pescoço com o auxílio de um gel. Por não utilizar radiação, o exame pode ser realizado até mesmo na gestação."
      }
    ]
  },
  {
    "slug": "consultas-e-check-up",
    "category": "exame",
    "title": "Consultas e Check-Up",
    "image": "/images/exames/check-up.jpg",
    "imageAlt": "Consultas e Check-Up",
    "content": [
      {
        "type": "paragraph",
        "text": "O check-up cardiológico consiste em uma série de exames e avaliações feitas por um médico cardiologista, com o objetivo de avaliar a condição e a capacidade cardiovascular do paciente, identificando possíveis alterações em seu funcionamento normal."
      },
      {
        "type": "paragraph",
        "text": "Assim, essa bateria de exames, juntamente com a avaliação do especialista, ajudam a descobrir ou avaliar o risco do paciente de sofrer alguma cardiopatia, como insuficiência cardíaca ou infarto, assim como indicar ou contraindicar a prática esportiva."
      },
      {
        "type": "paragraph",
        "text": "Em suma, o check-up cardiológico deve ser realizado em homens a partir de 45 anos de idade e em mulheres quando se inicia a menopausa. Isso porque, estatisticamente, estas são as fases da vida em que cresce o risco de desenvolvimento de problemas cardíacos."
      }
    ]
  },
  {
    "slug": "endoscopia-digestiva",
    "category": "exame",
    "title": "Endoscopia Digestiva",
    "image": "/images/exames/endoscopia-digestiva.jpg",
    "imageAlt": "Endoscopia Digestiva",
    "content": [
      {
        "type": "paragraph",
        "text": "A endoscopia digestiva alta é um exame que permite observar diretamente o esôfago, o estômago e o duodeno, ajudando a identificar alterações do trato digestivo e, em alguns casos, realizar pequenos tratamentos durante o próprio procedimento. Realizada pela Dra. Jaíne Dias Ribeiro de Abreu."
      },
      {
        "type": "heading",
        "text": "Como é feita"
      },
      {
        "type": "paragraph",
        "text": "O exame utiliza o endoscópio, um tubo fino e flexível equipado com câmera e luz na ponta, introduzido pela boca até o trato digestivo alto. É realizado com sedação leve, administrada por via endovenosa, garantindo conforto ao paciente. A duração média é de 10 a 20 minutos, podendo variar conforme a necessidade de procedimentos adicionais, como biópsias."
      },
      {
        "type": "heading",
        "text": "Preparo"
      },
      {
        "type": "paragraph",
        "text": "É necessário jejum de 8 a 12 horas antes do exame, com restrição de líquidos nas 4 horas anteriores. O uso de medicamentos deve ser ajustado previamente com orientação médica, garantindo que o procedimento seja realizado com segurança."
      },
      {
        "type": "heading",
        "text": "Indicações"
      },
      {
        "type": "list",
        "items": [
          "Dor abdominal persistente",
          "Refluxo gastroesofágico severo ou persistente",
          "Dificuldade ou dor para engolir",
          "Perda de peso inexplicada ou alterações no apetite",
          "Investigação de sangramentos digestivos"
        ]
      }
    ]
  },
  {
    "slug": "checkup-digestivo",
    "category": "exame",
    "title": "Checkup Digestivo",
    "image": "/images/exames/checkup-digestivo.jpg",
    "imageAlt": "Checkup Digestivo",
    "content": [
      {
        "type": "paragraph",
        "text": "O checkup digestivo é uma avaliação médica preventiva que analisa a saúde do sistema digestivo, do esôfago ao intestino, com o objetivo de identificar alterações ainda em fase inicial, permitindo tratamento precoce e evitando complicações futuras. Realizado pela Dra. Jaíne Dias Ribeiro de Abreu."
      },
      {
        "type": "heading",
        "text": "O que inclui"
      },
      {
        "type": "paragraph",
        "text": "A avaliação começa com uma consulta com a gastroenterologista, que analisa os sintomas relatados e o histórico do paciente antes de solicitar os exames complementares necessários, que podem incluir:"
      },
      {
        "type": "list",
        "items": [
          "Endoscopia digestiva alta, para avaliar esôfago, estômago e duodeno",
          "Exames de sangue e fezes, para investigar infecções, parasitas e sangue oculto",
          "Ultrassonografia abdominal, quando indicada",
          "Outros exames complementares, conforme avaliação clínica"
        ]
      },
      {
        "type": "paragraph",
        "text": "O checkup digestivo é especialmente recomendado para quem apresenta sintomas frequentes, como dor abdominal, refluxo ou alterações intestinais, e também como acompanhamento preventivo de rotina."
      }
    ]
  },
  {
    "slug": "ultrassom-doppler-vascular",
    "category": "exame",
    "title": "Ultrassom Doppler Vascular",
    "image": "/images/exames/doppler-carotida.jpeg",
    "imageAlt": "Ultrassom Doppler Vascular",
    "content": [
      {
        "type": "paragraph",
        "text": "O ultrassom Doppler vascular é um exame não invasivo que utiliza ondas sonoras de alta frequência para avaliar o fluxo sanguíneo em artérias e veias, auxiliando no diagnóstico de doenças como tromboses, varizes, estenoses, aneurismas e outras alterações da circulação."
      },
      {
        "type": "heading",
        "text": "Como é feito"
      },
      {
        "type": "paragraph",
        "text": "O paciente permanece deitado enquanto o médico desliza o transdutor sobre a região a ser avaliada, com o auxílio de um gel condutor. O aparelho emite ondas sonoras que refletem no sangue em movimento, permitindo visualizar o fluxo em tempo real."
      },
      {
        "type": "paragraph",
        "text": "É um exame simples, indolor, com duração aproximada de meia hora, que não utiliza radiação nem contraste, podendo ser realizado inclusive por gestantes."
      }
    ]
  },
  {
    "slug": "polissonografia",
    "category": "exame",
    "title": "Polissonografia",
    "image": "/images/exames/clinica-medica.jpeg",
    "imageAlt": "Polissonografia",
    "content": [
      {
        "type": "paragraph",
        "text": "A polissonografia é o exame considerado padrão-ouro para avaliar a qualidade do sono e identificar distúrbios relacionados a ele. É indolor e não invasivo, realizado por meio de eletrodos fixados na pele que monitoram a atividade respiratória, muscular, cardíaca e cerebral durante uma noite de sono."
      },
      {
        "type": "heading",
        "text": "Como é feita"
      },
      {
        "type": "paragraph",
        "text": "O exame pode ser realizado em laboratório especializado ou no domicílio do paciente, e acompanha uma noite inteira de sono. Ao final, é gerado um relatório com parâmetros como frequência cardíaca, movimento dos olhos, padrão respiratório e atividade muscular."
      },
      {
        "type": "heading",
        "text": "Indicações"
      },
      {
        "type": "list",
        "items": [
          "Sonolência excessiva durante o dia",
          "Ronco excessivo",
          "Suspeita de apneia obstrutiva do sono",
          "Síndrome das pernas inquietas",
          "Insônia e outras queixas relacionadas ao sono"
        ]
      },
      {
        "type": "paragraph",
        "text": "A polissonografia é fundamental na investigação da apneia obstrutiva do sono, condição em que ocorrem pausas repetidas na respiração durante a noite, reduzindo a oxigenação do organismo e fragmentando o descanso."
      }
    ]
  },
  {
    "slug": "ecocardiograma-transesofagico",
    "category": "exame",
    "title": "Ecocardiograma Transesofágico",
    "image": "/images/exames/ecocardiograma-transesofagico.jpg",
    "imageAlt": "Ecocardiograma Transesofágico",
    "content": [
      {
        "type": "paragraph",
        "text": "O ecocardiograma transesofágico é um exame de ultrassom do coração realizado com uma sonda inserida pelo esôfago, permitindo imagens mais detalhadas das estruturas cardíacas. Diferente do ecocardiograma transtorácico, feito pela parede do tórax, o exame transesofágico oferece maior resolução por não sofrer interferência dos ossos ou pulmões, sendo indicado quando o exame convencional não é suficiente."
      },
      {
        "type": "heading",
        "text": "Como é feito"
      },
      {
        "type": "paragraph",
        "text": "O médico insere a sonda pela boca até o esôfago, região próxima ao coração, onde o transdutor capta as imagens. O procedimento é realizado com sedação leve por via endovenosa e acompanhamento da equipe de anestesia, garantindo conforto e segurança ao paciente."
      },
      {
        "type": "heading",
        "text": "Preparo"
      },
      {
        "type": "paragraph",
        "text": "É necessário jejum de pelo menos 6 horas antes do exame, tanto para prevenir riscos associados à sedação quanto para melhorar a qualidade das imagens. Recomenda-se o uso de roupas confortáveis e a remoção de joias, piercings e próteses dentárias antes do procedimento."
      },
      {
        "type": "heading",
        "text": "Riscos"
      },
      {
        "type": "paragraph",
        "text": "É, em geral, um exame seguro quando realizado por profissionais treinados. Pode haver desconforto na garganta, náuseas ou irritação local, especialmente logo após o exame. Complicações mais sérias, como lesões no esôfago ou reações à sedação, são raras."
      }
    ]
  },
  {
    "slug": "ecocardiograma-com-estresse-farmacologico",
    "category": "exame",
    "title": "Ecocardiograma com Estresse Farmacológico",
    "image": "/images/exames/ecocardiograma-estresse-farmacologico.jpg",
    "imageAlt": "Ecocardiograma com Estresse Farmacológico",
    "content": [
      {
        "type": "paragraph",
        "text": "O ecocardiograma com estresse farmacológico combina o ultrassom Doppler com a administração de medicações que aceleram os batimentos cardíacos, de forma semelhante ao efeito de um esforço físico, sem que o paciente precise se exercitar. É uma alternativa importante para quem tem dificuldade de realizar exercícios ou cujo traçado dificulte a análise por outros métodos."
      },
      {
        "type": "heading",
        "text": "Indicações"
      },
      {
        "type": "list",
        "items": [
          "Investigação de isquemia miocárdica, sobretudo em pacientes com dificuldade para exercício físico",
          "Avaliação de viabilidade miocárdica",
          "Acompanhamento após cirurgias cardíacas",
          "Suspeita de doença arterial coronariana"
        ]
      },
      {
        "type": "heading",
        "text": "Contraindicações"
      },
      {
        "type": "paragraph",
        "text": "Entre as principais contraindicações estão estenose aórtica crítica, cardiomiopatia hipertrófica, arritmias ventriculares instáveis, distúrbios de condução atrioventricular, síndromes isquêmicas instáveis e gestação. A indicação do exame e do tipo de medicação utilizada deve ser sempre avaliada pelo cardiologista."
      }
    ]
  },
  {
    "slug": "strain",
    "category": "exame",
    "title": "Strain",
    "image": "/images/exames/strain.jpg",
    "imageAlt": "Strain",
    "content": [
      {
        "type": "paragraph",
        "text": "O strain miocárdico é uma técnica avançada que complementa o ecocardiograma convencional, avaliando a deformação do músculo cardíaco durante os movimentos de contração e relaxamento. A análise é feita pelo método de speckle tracking, que acompanha marcadores acústicos naturais do miocárdio ao longo do ciclo cardíaco."
      },
      {
        "type": "paragraph",
        "text": "Essa técnica permite identificar disfunções contráteis precoces e regionais com maior sensibilidade do que os métodos tradicionais, sendo especialmente útil em situações nas quais o coração pode já estar sendo afetado mesmo com a fração de ejeção ainda normal — como no acompanhamento de pacientes em quimioterapia com medicações cardiotóxicas e em portadores de doenças das valvas cardíacas."
      }
    ]
  }
];

export const specialties = services.filter((s) => s.category === "especialidade");
export const exams = services.filter((s) => s.category === "exame");

export function getServiceBySlug(category: ServiceCategory, slug: string) {
  return services.find((s) => s.category === category && s.slug === slug);
}
