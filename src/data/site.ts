export const site = {
  name: "Instituto do Coração Circuito das Águas",
  shortName: "Instituto do Coração",
  doctor: "Dr. Giovani Dias",
  tagline: "O mais moderno e completo Centro Cardiológico do Sul de Minas",
  description:
    "O Instituto do Coração Circuito das Águas - Dr. Giovani Dias chega ao mercado de São Lourenço e Região para trazer o que há de mais novo e tecnológico em diagnósticos e tratamentos de cardiologia e doenças do coração, oferecendo o maior cuidado possível com os pacientes.",
  url: "https://www.incorcircuitodasaguas.com.br",
  address: {
    street: "Rua Jaime Sotto Mayor, nº 99 - Segundo Andar - Federal",
    city: "São Lourenço",
    state: "MG",
    full: "Rua Jaime Sotto Mayor, nº 99 - Segundo Andar - Federal - São Lourenço | Minas Gerais",
  },
  phones: [
    { display: "(35) 3415-1656", href: "tel:+553534151656" },
    { display: "(35) 9 8816-8932", href: "tel:+5535988168932" },
  ],
  whatsappNumber: "5535988168932",
  whatsappDefaultMessage: "Quero marcar uma consulta...",
  email: "institutodocoracaosl@gmail.com",
  hours: {
    days: "Segunda à Sexta",
    time: "08:00 às 18:00",
  },
  instagram: {
    handle: "@incorcircuitodasaguas",
    url: "https://www.instagram.com/incorcircuitodasaguas/",
  },
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14784.794647220475!2d-45.0494464!3d-22.1184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e1f1f5b9d9c0139!2sINSTITUTO%20DO%20CORA%C3%87%C3%83O%20DO%20CIRCUITO%20DAS%20AGUAS%20DR%20GIOVANI%20DIAS!5e0!3m2!1spt-BR!2sbr!4v1668685237145!5m2!1spt-BR!2sbr",
  formspreeEndpoint: "https://formspree.io/f/mlekrnwb",
  analytics: {
    gaId: "G-TE05MY15E6",
    smartlookId: "191cbf20bba4e46ddcf48392a438e05825132ef6",
  },
} as const;

export function whatsappHref(message: string = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
