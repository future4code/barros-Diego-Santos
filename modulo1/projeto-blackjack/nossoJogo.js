/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */




    //// Montando o jogo
// Essa etapa do projeto consiste em criar um programa que:
// 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
// 2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".
// 3 - Se o usuário responder cancel, imprime uma mensagem no console "O jogo acabou".
// 4 - Se o usuário responder Ok, o programa deve iniciar uma nova rodada. 

// A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de
  // cada jogador e informar o vencedor (usuário ou computador), ou empate, caso as 
   // pontuações sejam iguais.

// 5 - Nós preparamos um método que permite sortear uma carta. Ele já está pronto e você só 
  // precisa invocá-lo. Cada carta sorteada é um objeto com duas propriedades: um texto que
   // representa o que é escrito na carta; e um valor que mostra a pontuação da carta.  
// 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato 
  // mostrado abaixo
  // "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
  // "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
// 7 -  Além disso, deve indicar o vencedor ou um empate
  // "Empate!"
  // "O usuário ganhou!"
  // "O computador ganhou!"


function inicio(){
   console.log("Boas vindas ao jogo de Blackjack! ")
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const carta3 = comprarCarta()
   const carta4 = comprarCarta()
   const jogador = carta1.valor + carta2.valor
   const jogador2 = carta3.valor + carta4.valor

   /*deixei esse aqui comentado para se
   quiserem testar se vai ou nao definir o perdedor se um dos dois der 22 pontos*/
   //const jogador = 21
   //const jogador2 = 22
   
   function ganhador()  {
      if(jogador > jogador2 && jogador < 22) {
         console.log("Você ganhou: Parabéns ")
      } else if(jogador2 > jogador && jogador2 < 22){
         console.log("O computador ganhou! :(")
      }
      // aqui em baixo, determina que, quem tiver 22 pontos ou mais  perde
      else if(jogador >=22 && jogador2 <= 21){ 
         console.log("O computador ganhou! :(")
      } else if(jogador2 >= 22 && jogador <= 21){
         console.log("Você ganhou: Parabéns")
      } else {
         console.log("EMPATE")
      }
   } 

   console.log("As Cartas ( K ), ( J ) e ( Q ) correspondem ao valor de ( 10 ) ")
   console.log("Já o ( A ) tem o valor ( 11 ) ")
   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.valor} - pontuação ${jogador}`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.valor} - pontuação ${jogador2}`)
   return ganhador()
      
}
const reiniciarJogo = () => {
   if((confirm("Deseja jogar novamente? "))){
      location.reload()
      alert("Iniciando uma nova rodada ") 
   } else{
      console.log("fim do jogo")
   }
}
// chamando as duas funções abaixo
inicio()
reiniciarJogo()