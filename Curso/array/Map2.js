const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um -array- apenas com os preços

//tentativa
Array.prototype.ConvertObjectAndReturnPrice = function (callback) {
   
    for (let i = 0; i < this.length; i++){
        callback(i,"R$"+(JSON.parse(this[i]).preco))
    }

}

carrinho.ConvertObjectAndReturnPrice(function (i, preco) {
    console.log(`${i+1} - ${preco}`)
})

// resposta
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)