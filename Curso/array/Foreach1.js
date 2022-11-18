const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, index, arr) {
    console.log(`${index + 1}) ${nome} `)
    console.log(arr)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)