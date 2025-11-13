
const firstNames = [
  "Alice","Bruno","Carla","Diego","Eduarda","Fernando","Giovana","Henrique","Isabela","João",
  "Karen","Lucas","Marina","Nicolas","Olivia","Paulo","Queila","Rafael","Sofia","Tiago",
  "Ursula","Vitor","Wesley","Ximena","Yasmin","Zeca"
];

const lastNames = [
  "Silva","Souza","Almeida","Ferreira","Gomes","Melo","Barros","Lima","Cardoso","Vieira"
];

const roles = [
  "Desenvolvedor Front-end","Desenvolvedor Back-end","UI/UX Designer","Cientista de Dados",
  "Engenheiro de Software","Engenheiro de Machine Learning","DevOps","Product Manager",
  "QA Analyst","Cybersecurity Analyst","Cloud Architect","Data Engineer"
];

const cities = [
  "São Paulo","Rio de Janeiro","Belo Horizonte","Curitiba","Porto Alegre",
  "Salvador","Recife","Brasília"
];

const skills = [
  "React","Node.js","Python","Django","Figma","AWS","Docker","Kubernetes","SQL",
  "MongoDB","Tailwind","TypeScript","Next.js","TensorFlow","Java","C#","Go","Flutter"
];

const softSkills = [
  "Comunicação","Trabalho em equipe","Proatividade","Criatividade",
  "Liderança","Pensamento crítico","Organização","Adaptabilidade"
];

const hobbies = [
  "Leitura","Fotografia","Ciclismo","Música","Cinema","Cozinhar",
  "Jogos","Caminhadas","Viajar","Tecnologia"
];

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomItems(list, count) {
  return list.sort(() => Math.random() - 0.5).slice(0, count);
}

export const profiles = Array.from({ length: 60 }, (_, i) => {
  const name = `${randomItem(firstNames)} ${randomItem(lastNames)}`;

  return {
    id: i + 1,
    name,
    photo: `https://api.dicebear.com/7.x/adventurer/svg?seed=${name.replace(" ", "")}`,
    role: randomItem(roles),
    city: randomItem(cities),
    skills: randomItems(skills, 5),
    experience: `${Math.floor(Math.random() * 12) + 1} anos de experiência`,
    academic: `Bacharelado em ${randomItem([
      "Ciência da Computação",
      "Sistemas de Informação",
      "Design Digital",
      "Engenharia de Software",
      "Análise e Desenvolvimento de Sistemas"
    ])}`,
    softSkills: randomItems(softSkills, 3),
    hobbies: randomItems(hobbies, 2)
  };
});
