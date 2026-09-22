export interface TeamMember {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

export const team: TeamMember[] = [
  {
    name: "Dr. Giovani Dias",
    role: "Cardiologia | Arritmologia | Ecocardiografia | Ergometria",
    image: "/images/team/01.jpg",
  },
  {
    name: "Dra. Jaíne Dias Ribeiro de Abreu",
    role: "Doenças do Aparelho Digestivo",
    image: "/images/team/05.jpg",
    imagePosition: "object-[center_12%]",
  },
  {
    name: "Dr. Hugo de Castro Sabino",
    role: "Cardiologista | Ecocardiografista",
    image: "/images/team/06.jpg",
    imagePosition: "object-[center_15%]",
  },
];
