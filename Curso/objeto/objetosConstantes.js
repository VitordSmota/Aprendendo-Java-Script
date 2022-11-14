// pessoa -> MemoryAdress 123 -> obj{...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = "Rua do Bananal"
delete pessoa.nome 

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)