const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);

// const notasAtualizadas = notas.map( nota => {
//     if (nota == 10) {
//         return nota;
//     } else {
//         return ++nota;
//     }
// });

console.log(notasAtualizadas);


