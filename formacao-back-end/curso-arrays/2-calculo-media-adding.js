let notasAlunos = [10, 6, 8];

const addNota = (nota, arrayNotas) => {
  arrayNotas.push(nota);
};

const calculaMedia = (arrayNotas) => {
  let media = 0;

  for (let i = 0; i < arrayNotas.length; i++) {
    media += arrayNotas[i];
  }

  return media / arrayNotas.length;
};

addNota(7, notasAlunos);

console.log(`A média de notas da classe é ${calculaMedia(notasAlunos)}`);
