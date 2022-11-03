// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

const potenciacao = (a, b) => {
    let result;
    let aux = a
    for (let base = 2; base <= b; base++){
     aux = a * aux
    result = aux
     console.log(`o número da base é :${base}`)   
    }
    console.log(`A potencia da ${a} elevado a ${b} é: ${result}`)
}
potenciacao(2,3)