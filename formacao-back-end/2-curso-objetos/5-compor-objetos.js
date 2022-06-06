const cliente = {
  nome: 'Wilhelmina',
  idade: 36,
  cpf: '27493378930',
  email: 'mina@email.com',
  fones: ['51984275890', '21956786490'],
};

cliente.dependentes = {
  nome: 'Quincey',
  parentesco: 'filho',
  dataNasc: '06/11/1903',
};

cliente.dependentes.sobrenome = 'Harker';

console.log(cliente);
