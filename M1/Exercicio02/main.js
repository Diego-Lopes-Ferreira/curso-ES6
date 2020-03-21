/*
[V] map   :Crie uma variável que contenha todas idades dos usuários
  [23, 15, 30]
[V] filter:Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos
  [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
[V] find  :Crie uma variável que procura por um usuário que trabalhe na empresa Google
  undefined

[V] Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:
:  [
  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
   ]

*/
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);

const workersRocketSeat = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat';
});
console.log(workersRocketSeat);

const workersGoogle = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log(workersGoogle);

const newUsers = usuarios.map(function(item) {
  item.idade = item.idade * 2;
  return item;
});
console.log(newUsers);

const minus50users = newUsers.filter(function(item) {
  return item.idade<= 50;
});
console.log(minus50users);
