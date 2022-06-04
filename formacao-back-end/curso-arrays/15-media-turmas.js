const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const calculaMedia = (sala) => {
  let media = 0;
  sala.forEach((nota) => {
    media += nota / sala.length;
  });
  return media.toFixed(2);
};

const calculaMedia2 = (sala) => {
  let media = sala.reduce((acum, atual) => atual + acum, 0);
  return media / sala.length;
};

console.log(
  `A média da sala de JavaScript é ${calculaMedia(
    salaJs
  )} e o tipo é ${typeof calculaMedia(salaJs)}`
);
console.log(
  `A média da sala de Java é ${calculaMedia(salaJava)} e o tipo é ${typeof calculaMedia(
    salaJava
  )}`
);
console.log(
  `A média da sala de Python é ${calculaMedia(
    salaPython
  )} e o tipo é ${typeof calculaMedia(salaPython)}`
);

console.log(
  `A média da sala de JavaScript é ${calculaMedia2(
    salaJs
  )} e o tipo é ${typeof calculaMedia2(salaJs)}`
);
console.log(
  `A média da sala de Java é ${calculaMedia2(salaJava)} e o tipo é ${typeof calculaMedia2(
    salaJava
  )}`
);
console.log(
  `A média da sala de Python é ${calculaMedia2(
    salaPython
  )} e o tipo é ${typeof calculaMedia2(salaPython)}`
);
