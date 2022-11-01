// criar produto com nome e preco

function criarProdutos(nome, preco) {
    return {
        nome: nome,
        preco: preco
    }
}

const cafe = criarProdutos('café', 15.99)
console.log(cafe)

cafe.dezdedesconto = 0.9

console.log(cafe)
const cafeComDesconto = cafe.preco * cafe.dezdedesconto
console.log(cafeComDesconto)


// Exemplo
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))