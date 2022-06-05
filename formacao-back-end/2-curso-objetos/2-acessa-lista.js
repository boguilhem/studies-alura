const cliente = {
  nome: 'Eduardo',
  idade: 36,
  cpf: '27493378930',
  email: 'dudu@email.com',
};

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves.forEach((chave) => {})]);

chaves.forEach((info) => console.log(cliente[info]));

console.log(`O nome do cliente é ${cliente.nome}`);
console.log(`A idade do cliente é ${cliente.idade}`);
console.log(`O cpf do cliente é ${cliente.cpf.substring(0, 3) + '********'}`);
console.log(`O email do cliente é ${cliente.email}`);
