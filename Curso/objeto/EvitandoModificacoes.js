// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível: ', Object.isExtensible(produto))

console.log(produto)

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome ='Silva'

delete pessoa.nome 

pessoa.idade = 68

console.log(pessoa)

// Object.freeze = Seal + valores constantes


