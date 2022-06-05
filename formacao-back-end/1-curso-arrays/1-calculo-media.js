const notasAlunos = [10, 6.5, 8, 7.5];

const calculaMedia = (notas) => {
  let media = 0;

  for (let i = 0; i < notas.length; i++) {
    media += notas[i];
  }

  return media / notas.length;
};

console.log(`A média de notas da classe é ${calculaMedia(notasAlunos)}\n`);

// Metodo 2:

let media =
  notasAlunos.reduce((acum, atual) => {
    return atual + acum;
  }, 0) / notasAlunos.length;

console.log(`A média eficiente das notas da classe é ${media}`);

// OU

const calculaMediaEficiente = (arrayNotas) => {
  let media = arrayNotas.reduce((acum, atual) => atual + acum, 0);
  return media / arrayNotas.length;
};

console.log(
  `A média eficiente das notas da classe é ${calculaMediaEficiente(notasAlunos)}`
);
