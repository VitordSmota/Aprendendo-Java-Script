const divisivelpor3 = valor => { 

    const stringdoValor = valor.toString()

    const ArrdoValor = stringdoValor.split('')
    let soma = 0
    for (i in ArrdoValor) {
        soma = soma + ArrdoValor[i]
    }
    const ehdivisivel = (soma%3 == 0)? true : false
     const informando =
       (ehdivisivel == true)
         ? ` O ${valor} é divível por 3`
         : ` O ${valor} é NÃO É divível por 3`; 


    
    console.log(informando)
}

divisivelpor3(2)
divisivelpor3(3)
divisivelpor3(6)
divisivelpor3(10)
divisivelpor3(10323132312321 )

