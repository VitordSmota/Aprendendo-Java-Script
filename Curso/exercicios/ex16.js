const calculadora = (n1, operador, n2) => {
    switch (operador) {
        case '+':
            return n1 + n2
           
        case '-':
            return n1 - n2
        
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default: 
            return 'Operador inválido'
        
    }

}

console.log(calculadora(2,'+', 3))
console.log(calculadora(2,'-', 3))
console.log(calculadora(2,'*', 3))
console.log(calculadora(6,'/', 3))