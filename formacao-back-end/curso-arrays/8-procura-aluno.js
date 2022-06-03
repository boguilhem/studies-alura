const listaAlunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre'];

const mediaAlunos = [10, 7, 4, 4.5, 9, 5, 8, 7.5, 6, 8];

const listaNotasEAlunos = [listaAlunos, mediaAlunos];

const buscaAluno = (nomeDoAluno) => {
    if (listaNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaNotasEAlunos[0].indexOf(nomeDoAluno);
        let nota = listaNotasEAlunos[1][indice];
        return `A nota de ${nomeDoAluno} é ${nota}`;
    } else {
        return `O aluno ${nomeDoAluno} não foi encontrado`;
    }
}

console.log(buscaAluno('Pedro'));