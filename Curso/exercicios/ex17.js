const reajuste =(plano, salario) => {
    switch (plano) {
        case 'A':
            return 'R$ '+ salario * 1.1
        case 'B': 
            return 'R$ '+ salario * 1.15
        case 'C': 
            return 'R$ '+ salario * 1.20
        default :
            return 'Plano inválido' 
    }

}

console.log(reajuste('A', 1000))