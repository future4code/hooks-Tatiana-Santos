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

console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")){

   const cartaDoUsuario1 = comprarCarta ()
   const cartaDoUsuari02 = comprarCarta ()
   const cartaDoPc1 = comprarCarta ()
   const cartaDoPc2 = comprarCarta ()

   const pontuacaoDoUsuario = cartaDoUsuario1.valor + cartaDoUsuari02.valor
   const pontuacaoDoPc = cartaDoPc1.valor + cartaDoPc2.valor

   console.log(`Usuário - cartas: ${cartaDoUsuario1.texto} ${cartaDoUsuari02.texto} - pontuação ${cartaDoUsuario1.valor + cartaDoUsuari02.valor}`)

   console.log(`Computador - cartas: ${cartaDoPc1.texto} ${cartaDoPc2.texto} - pontuação ${cartaDoPc1.valor + cartaDoPc2.valor}`)

   if (pontuacaoDoUsuario > pontuacaoDoPc){
      console.log ("O usuário ganhou!")

   }  else if (pontuacaoDoUsuario < pontuacaoDoPc){
      console.log ("O computador ganhou!")
   }
   
else {
   console.log ("Empate")
}

}else{
  console.log("O jogo acabou")
}

