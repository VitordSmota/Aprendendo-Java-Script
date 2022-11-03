// Crie uma função que irá receber dois valores, o dividendo e o divisor.
// A função deverá imprimir o resultado e o resto da divisão destes dois valores

const dividindo = (dividendo, divisor) => {
    let resto = dividendo % divisor
    let resultado = dividendo / divisor;
    resultado =  Math.floor(resultado)

    console.log(`o resultado da divisão de ${dividendo} por ${divisor} é ${resultado}.\n O resto é ${resto}`)
}
dividindo(25,5)
dividindo(21,5)
dividindo(28,5)


