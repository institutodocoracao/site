export interface Testimonial {
  name: string;
  text: string;
  source: string;
  sourceUrl: string;
}

const doctoraliaUrl =
  "https://www.doctoralia.com.br/giovani-de-almeida-dias/cardiologista/sao-lourenco";

export const testimonials: Testimonial[] = [
  {
    name: "jcjunho",
    text: "Excelente profissional, passa muita confiança com conhecimento bem atualizado. Já consultei com vários cardiologistas de São Lourenço, sem dúvidas que Dr. Giovani está entre os melhores!",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "Leo Alves",
    text: "Extremamente capacitado, e muito gentil! Na minha opinião um dos melhores de sete Lagoas sem dúvidas.",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "A.D",
    text: "Excelente médico cardiologista. Muito atencioso, preocupado com o paciente. Esclareceu minhas dúvidas. É não posso deixar de falar da secretaria Jessica que foi um carinho com meus pais. Só tenho a agradecer.",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "Isabela Augusta Franco Matos",
    text: "Gostaria de agradecer a atenção do médico Dr Giovani, que é muito competente, pela sua dedicação e profissionalismo com os pacientes, e também agradecer toda a equipe da Med Life pois as meninas são muito atenciosas, em especial a funcionária Jéssica, pelo acolhimento, educação, paciência e carinho com os pacientes e familiares dos pacientes. Deus abençoe essa equipe maravilhosa!",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "Ana Flávia Silva",
    text: "Estive em uma consulta com Dr Giovanni, ele foi muito atencioso, me atendeu muito bem. Agradeço também a Jéssica (Secretária), que me recebeu muito bem no consultório. Dr Giovanni é um excelente médico.",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "m.rodrigues",
    text: "Única clínica que entendeu meu problema e indicou Dr. Giovani. Está entre os melhores cardiologistas que já conheci. Obrigada pela atenção das secretárias Jessica e Gil. Super indico.",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "Glaucia",
    text: "Sempre receptivo e direto, coerente e bem interessado. Auxiliando no cuidado e melhora do paciente.",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
  {
    name: "Maria",
    text: "Minha mãe consultou com Dr. Giovani quando ele ainda atendia pelo SUS no PSF. Ótimo médico, muito atencioso e explica com clareza e olha os exames com muita atenção. É uma pena não atender pelo SUS, mas infelizmente médicos assim não são valorizados pelo sistema. Recomendo por ser um médico muito humano, continue sempre assim.",
    source: "Doctoralia",
    sourceUrl: doctoraliaUrl,
  },
];
