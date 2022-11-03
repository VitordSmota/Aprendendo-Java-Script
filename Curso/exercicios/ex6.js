/**
    M = Montante |J = Juros | C = Capital | i = taxa | T = tempo

    J =  C . i . t
    M = C + J
    
 */




const regimeJuroSimples = (capital, taxadeJuros, tempo) => {
    const juros = capital * taxadeJuros * tempo 
    const montante = capital + juros

    console.log(`O juros é : ${juros} \nO montante é: ${montante}\n`)
 

}

regimeJuroSimples(1000, 0.02, 12)
regimeJuroSimples(1300, 0.05, 3)


/**
    M = Montante |J = Juros | C = Capital | i = taxa | T = tempo

   M = C (1 + i) ^ T 
    
 */
const regimeJurosComposto = (capital, tx , tempo) => {

    let taxa = tx + 1
    let taxaFixada = taxa 
    for (let i = 2; i <= tempo; i++){
        taxa = taxa * taxaFixada
    }
    let Montante = capital * taxa
    Montante = Montante.toFixed(2)

    console.log(`O Montante em Juros Composto é: ${Montante}`)
}

regimeJurosComposto(500,0.2,36)









