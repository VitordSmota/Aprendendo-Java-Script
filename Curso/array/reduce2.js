const alunos = [
  { nome: "João", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: true },
  { nome: "Ana", nota: 8.7, bolsista: false },
];
// Desafio 1: todos os alunos são bolsistas? 

const todosBolsistas = obj => obj.bolsista
const returnboolean = (acc, att)=> acc && att 

// Desafio 2: Algum aluno é bolsista?
console.log(alunos.map(todosBolsistas).reduce(returnboolean))

console.log(alunos.map(todosBolsistas))