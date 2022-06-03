const notasAlunos = [10, 6.5, 8, 7.5];

const calculaMedia = listaNotas => {
    let media = 0;
    listaNotas.forEach(element => {
        media += element;
    });

    media /= listaNotas.length;
    console.log(`A média dos alunos é ${media}`);
}

calculaMedia(notasAlunos);

