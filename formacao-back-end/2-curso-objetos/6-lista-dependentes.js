const cliente = {
  nome: 'Wilhelmina',
  idade: 36,
  cpf: '27493378930',
  email: 'mina@email.com',
  fones: ['51984275890', '21956786490'],
  dependentes: [
    {
      nome: 'Quincey',
      sobrenome: 'Harker',
      parentesco: 'filho',
      dataNasc: '06/11/1903',
    },
  ],
};

cliente.dependentes.push({
  nome: 'Lucy',
  sobrenome: 'Harker',
  parentesco: 'filha',
  dataNasc: '04/02/1910',
});

const filhaMaisNova = cliente.dependentes.filter((dependente) => {
  return dependente.dataNasc === '04/02/1910';
});

console.log(filhaMaisNova[0].nome);
