//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


//EXERCÍCIO 1 - Indique todas as mensagens impressas no console.

// a. false
// b. false
// c. true
// d. Boolean
// -------------------------------------------------------------------------------

//EXERCÍCIO 2 - Consegue perceber algum problema? O que será impresso no console?

// O problema no comando é que está sendo solicitado a soma de variáveis em String.
// Quando utilizado o prompt para ser solicitado o preenchimento de números pelo usuário é necessário colocar = Number(prompt("texto")).
// Assim ele vai converter a mensagem pelo usuário de String para o tipo Nunmber, possibilitando a soma.
// Caso a conversão não seja feita no console vai estar impresso os números do usuário de maneira concatenada.

// -------------------------------------------------------------------------------

//EXERCÍCIO 3 - Solução sugerida

// Para a soma ser de fato realizada seria necessário realizar a seguinte alteração:

//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))
//const soma = primeiroNumero + segundoNumero
//console.log(soma)

//Assim a soma seria realizada com o comando.

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//-------------------------------------------------------------------------------------------------------------------------------------------------------

// 1- Faça um programa que:

// a) Pergunte a idade do usuário.

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga.

// c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`).

// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo).

let idadeUsuário = Number(prompt("Olá! Pode me dizer a sua idade?"))

let idadeAmigo = Number(prompt("E a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior que a do seu melhor amigo(a)?", idadeUsuário > idadeAmigo)

console.log("Diferença de idade é de", idadeUsuário - idadeAmigo, "anos.")

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// 2- Faça um programa que:

// a) Peça ao usuário que insira um número par.

// b) Imprima na console o resto da divisão desse número por 2.

// c)Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//   Teste realizado com os seguintes números: 12, 14, 16, 18 e 98.
//   Resultado foi sempre o mesmo, ZERO.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//    Se o usuário inserir um número impar a resposta sempre será UM.

let numeroPar = Number(prompt("Me diga um número par!"))

console.log("Resto da divisão:", numeroPar % 2)

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// 3- Faça um programa que pergunte ao usuário sua idade em anos. Depois imprima no console

// a) A idade do usuário em meses.

// b) A idade do usuário em dias.

// c) A idade do usuário em horas.

let idadeUser = Number(prompt("Escreva sua idade em anos!"))

console.log("Idade em meses:",idadeUser * 12)

console.log("Idade em dias:",idadeUser * 365)

console.log("Idade em horas:",idadeUser * (365 * 24))

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// 4 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

let numero1 = Number(prompt("Por favor insira um número, pode ser qualquer número!"))
let numero2 = Number(prompt("Pode digitar mais um número? Esse será o último, obrigado!"))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 ===0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 ===0)

//-------------------------------------------------------------------------------------------------------------------------------------------------------


