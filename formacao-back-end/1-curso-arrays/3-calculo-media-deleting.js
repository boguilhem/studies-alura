let notasAlunos = [10, 6, 8, 5.5, 10];

const removeUltimaNota = (arrayNotas) => {
  arrayNotas.pop();
};

const calculaMedia = (arrayNotas) => {
  let media = 0;

  for (let i = 0; i < arrayNotas.length; i++) {
    media += arrayNotas[i];
  }

  return media / arrayNotas.length;
};

removeUltimaNota(notasAlunos);

console.log(`A média de notas da classe é ${calculaMedia(notasAlunos)}`);
