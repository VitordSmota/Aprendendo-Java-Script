// Crie um função que receba 0.1 + 0.2 (0.30000000000000004) e retorne R$0,30


const formateaMoeda = (a, b) => {
    let somadaMoeda = a + b
    somadaMoeda = somadaMoeda.toFixed(2)
    somadaMoeda = somadaMoeda.replace('.', ',')

    console.log(`R$ ${somadaMoeda}`)
    console.log(typeof somadaMoeda)



}

formateaMoeda(0.1, 0.2)