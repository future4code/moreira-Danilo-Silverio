/*
EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)*/


const mensagemBoasVindas = `♣️ ♠️ Boa vindas ao jogo de Blackjack! ♦️ ♥️ `

   console.log(mensagemBoasVindas)

      const primeiraCartaUsuario = comprarCarta()

         const segundaCartaUsuario = comprarCarta()

            const valorDaMaoUsuario = Number(primeiraCartaUsuario.valor) + Number(segundaCartaUsuario.valor)

               const primeiraCartaComputador = comprarCarta()

                  const segundaCartaComputador = comprarCarta()

                     const valorDaMaoComputador = Number(primeiraCartaComputador.valor) + Number(segundaCartaComputador.valor)


function resultadoDaPartida(valor1, valor2){

      if(valor1 > valor2) {

         return `O usuário ganhou!`

    }       else if (valor2 > valor1) {

               return `O computador ganhou!`

   }              if (valor2 - valor1 === 0) ;{

                     return`Foi um empate!`
   }
}

const novaRodada = confirm(`Quer iniciar uma nova rodada?`)

if(novaRodada) {

       console.log(`Usuário: cartas ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação: ${valorDaMaoUsuario}`)

         console.log(`Computador: cartas ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação: ${valorDaMaoComputador}`)

            console.log(resultadoDaPartida(valorDaMaoUsuario, valorDaMaoComputador))
   
} else {

      console.log(`O jogo terminou!`)
}