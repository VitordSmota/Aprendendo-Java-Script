// Crie uma função que recebe os comprimentos dos três lados e valide-os
const osLadosdoTriangulo = (A, B, C) => {
    
    if (A + B > C && A + C > B && B + C > A) {

        if (A == B && B == C && C == A) {  
            console.log(`O triangulo é Equilátero`)
            
        }

        if (A == B && A != C || A == C && C != B || B == C && B != A) {
           console.log("O triangulo é Isósceles")
        }
        
        if (A != B && A != C && C != B) {
            console.log("O triangulo é Escaleno")
        }
    
    }
    else {
        console.log('Não é um triangulo')
    }
    
}

osLadosdoTriangulo(3,8,5)

