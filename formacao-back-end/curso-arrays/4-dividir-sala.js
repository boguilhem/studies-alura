const sala = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

let turmaA = sala.slice(0, sala.length / 2);
let turmaB = sala.slice(sala.length / 2, sala.length);

console.log(`Alunos da Turma A: ${turmaA}\n`);

console.log(`Alunos da Turma B: ${turmaB}`);
