export interface StackGroup {
  label: string;
  items: readonly string[];
}

export const stack: readonly StackGroup[] = [
  {
    label: "Front End",
    items: ["TypeScript", "React", "Next.js", "Vue.js", "Angular", "RxJS", "Tailwind CSS"],
  },
  {
    label: "Back End",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Jest", "Git", "Docker", "GraphQL", "Figma", "Postman"],
  },
];
