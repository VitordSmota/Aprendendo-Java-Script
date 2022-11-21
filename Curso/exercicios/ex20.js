/**
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

*/


/**
    eu preciso: 
        rodar um loop até que a -----soma das cedulas seja igual ao valor inserido----
        no loop verificar do maior para o menor 
        dividir e pegar o número  inte

 */
let conta100 = 0 
let conta50 = 0 
let conta10 = 0 
let conta5 = 0 
let conta1 = 0

function valordoSaque(valor) {
    contador(valor)
}

function contador(valor) {
    while(valor > 0){
        if(valor - 100 >= 0){
            valor = valor -100
            conta100++
        }
        else if (valor - 50 >= 0) {
            valor = valor-50
            conta50++
        }
        else if (valor - 10 >= 0) {
            valor = valor-10
            conta10++
        }
        else if (valor - 5 >= 0) {
            valor = valor-5
            conta5++
        }
        else if (valor - 1 >= 0) {
            valor = valor-1
            conta1++
        }
    }
    ExibirNotas(conta100,conta50,conta10,conta5,conta1)
}
function ExibirNotas(c100,c50,c10,c5,c1) {
    if(c100 > 0){
        console.log(`${c100} nota(s) de R$100`)
    }
    if(c50 > 0){
        console.log(`${c50} nota(s) de R$50`)
    }
    if(c10 > 0){
        console.log(`${c10} nota(s) de R$10`)
    }
    if(c5 > 0){
        console.log(`${c5} nota(s) de R$5`)
    }
    if(c1 > 0){
        console.log(`${c1} nota(s) de R$1`)
    }
}

valordoSaque(350)


