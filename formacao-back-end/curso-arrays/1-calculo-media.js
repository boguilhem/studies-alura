let notasAlunos = [10, 6.5, 8, 7.5];

const calculaMedia = notas => {
    let media = 0;

    for (let i = 0; i < notas.length; i++) {
        media += notas[i];
    }

    return media / notas.length;
}

console.log(`A média de notas da classe é ${calculaMedia(notasAlunos)}`);