// Factory simples

function criarPessoa(nome, sobrenome) {
    return {
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Vitor', 'Mota'))