const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

const atualizaChamada = arraySala => {
    arraySala.splice(1, 2, 'Rodrigo');
    return arraySala;
}

let novaLista = atualizaChamada(listaDeChamada);

console.log(`A nova lista de chamada é ${novaLista}`)