//-------------------------------------------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//-------------------------------------------------------------------------------

// EXERCÍCIO 1

// A) O código solicita um número ao usuário, converte a resposta do usuário de String para Number e realiza um teste. 
//    O teste verifica se o resto da divisão do valor inserido pelo usuário é igual a zero, se for zero é dado "Passou no teste", caso não então ele não passou no teste. 

// B) Para números pares.

// C) Para números impares.

//-------------------------------------------------------------------------------

// EXERCÍCIO 2

// A) Para demonstrar facilmente ao usuário o preço da fruta que ele escolheu.
//    Temos um switch case armazenando várias frutas e preços, para apresenta-las ao usuário com base em sua escolha.

// B) O preço da fruta Maçã é R$ 2.25

// C) O preço da fruta Pêra é R$ 5 --> Porque tiramos o comando de freiar a condicional, o comando vai continuar até o último dado a apresentar.

//-------------------------------------------------------------------------------

// EXERCÍCIO 3

// A) Ela está solicitando ao usuário para digitar um número através do prompt e convertendo a resposta de String para Number.

// B) Se o número for 10, será impresso no console que "Esse número passou no teste". 
//    Se o número for -10, não vai aparecer nada pois só temos uma condição apresentada, não temos uma condição referente a um número menor que zero.

//C) Haverá um erro no console, não vai reconher a variável mensagem.
//   A variável foi criada dentro de um escopo local, portanto, não possui validade no escopo global para ser chamada através do console log.

//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//-------------------------------------------------------------------------------

// EXERCÍCIO 1

let idadeUsuario = Number(prompt(`Qual a sua idade?`))

if(idadeUsuario > 18) {

    console.log(`Você pode dirigir`)

} else {

    console.log(`Você não pode dirigir.`)
}
//-------------------------------------------------------------------------------

// EXERCÍCIO 2

let turnoDeEstudo = prompt(
`Qual turno você estuda? 
Responda com M (Matutino), V (Vespertino) ou N (Noturno)`).toUpperCase()

if(turnoDeEstudo === "M") {

    console.log(`Bom dia!`)

} else if(turnoDeEstudo === "V"){

    console.log(`Boa tarde!`)

} if(turnoDeEstudo === "N") {

    console.log(`Boa noite!`)
} 

//-------------------------------------------------------------------------------

// EXERCÍCIO 3

switch(turnoDeEstudo) {

    case `M`:
        console.log(`Bom dia!`)
        break
    
    case `V`:
        console.log(`Boa tarde!`)
        break
    
    case `N`:
        console.log(`Boa noite!`)
        break

    default:
        console.log(`Responda com M (Matutino), V (Vespertino) ou N (Noturno)`)
    
}

//-------------------------------------------------------------------------------

// EXERCÍCIO 4

let generoFilme = prompt(`Qual gênero de filme vamos assistir?`).toLowerCase()
let precoIngresso = Number(prompt(`Qual o preço do ingresso?`))

if(generoFilme === `fantasia`) {

    if(precoIngresso < 15) 

    console.log(`Bom filme!`)

} else(!generoFilme === `fantasia`) ;{

    console.log(`Escolha outro filme :(`)
}

