/*
    função de sistema de notas
    Alunos recebem notas de 0 - 100
    notas abaixo de 40 são reprovados
    notas - multiplo de 5 mais proxima for menor que 3 -> Arrendondar para esse próximo multiplo.
    se nota for abaixo de 38 não será feito arrendondamento 
    ex nota = 84 -> Arredondamento para 85. Mas a nota 29 não será arrendondada.


 */
const listadeALunos = [68,48,28,64,74,74,84,94,94,83,83,83,53,79,39,19,100]
let quociente

const SistemadeNotas = (notas) => {
    for (i in notas) {
        
        if (notas[i] >= 38) {
            quociente = Math.floor(notas[i] / 5)
            ++quociente
            if ((5 * quociente) % notas[i]   < 3) {
                notas[i] = 5*quociente
            }
            
            console.log(`N° do aluno ${i}, nota ${notas[i]}, APROVADO!!!`)
            
        }
        else {

            console.log(
              `N° do aluno ${i}, nota ${notas[i]},  REPROVADO!!!`
            );
        }
    }

}
SistemadeNotas(listadeALunos)