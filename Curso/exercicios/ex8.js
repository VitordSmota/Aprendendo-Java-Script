/**
  
  *! Para analisar desempenho do jogador 
    registrar pontuações por jogo
    verificar se a pontuação é maior que seu melhor jogo 
    verificar se a pontuação é menor que seu pior jogo
    lista de string = [pontuacao1,pontuacao 2,... n pontuacoes]
    criar um funcao
    ao receber a lista  ir retornar :
    o numero de vezes que ele bateu recorde de maior numero de pontos
    e quando fez seu pior jogo

   ex: string [10 20 20 8 25 3 0 30 1]
   retorno [3, 7] 3 =o numero de vezes que ele bateu recorde, e 7 a partida que teve seu pior jogo



pegando a quant de recordes 
 eu preciso 
 */

let pontuacaoPorPartidas = [10, 11, 12, 09, 04, 02, 15, 17, 16, 02, 01, 0, 20, 23, 24, 28]

const analisaDesempenho = Array => {
    let ultimoRecord = Array[0]
    let somaRecordes = 0
    let piorPartida = Array[0]
    const result = []
    let j = 1
    for (i in Array) {// percorre os index desse array

            if (Array[i] > ultimoRecord) {
                
                ultimoRecord = Array[i]
                somaRecordes++
                
            
            }
            if (Array[i] < Array[j]) {
                
                piorPartida = i  
                
            }
       
        
        
    }
     result.push(somaRecordes,piorPartida)
     console.log(result)


}
analisaDesempenho(pontuacaoPorPartidas)