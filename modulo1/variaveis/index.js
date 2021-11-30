
// **EXERCÍCIO 1 - INTERPRETAÇÃO DE CÓDIGO**/

//RESOLUÇÃO: Foi realizado a descrição de duas variáveis para armazenar a informação 10 (Number).
//Com o comando console apresentado será impresso a informação 10 tipo Number. 
//Logo após a variável (b) foi teve seu valor alterado, possibilidade permitida pela a variável não estar
//definida como constante. Como o valor foi alterado, a impressão a ser realizada no console será o contatenar
//do 10 e 5*/



//**EXERCÍCIO 2 - INTERPRETAÇÃO DE CÓDIGO**/

//RESOLUÇÃO: A variável foi declarada usando let, portanto, ela pode ter seu valor alterado. 
//Primeiramente, reconhecemos os valores de a e b, respectivamente, 10 e 20.
//Contudo, esses valores são modificados posteriormente.
//A varíavel c possui o mesmo valor de a, ou seja, 10. (Number)
//A varíavel b é alterada para o mesmo valor de c, passando a valer 10.
//Por fim, a variável a passa a valer o mesmo de b, que seria também 10.
//Portando, com o comando aprensentado, no console será impressa a informação concatenada de 10 10 10.



//**EXERCÍCIO 3 - INTERPRETAÇÃO DE CÓDIGO**/

//RESOLUÇÃO: Foram declaradas duas variaveis direcionadas para o usuário responder no site conforme a pergunta entre " ".
//Em sequência um alerta vai aparecer em tela dizendo o resultado da divisão de horas trabalhadas por quando a pessoa ganha, no formato da mensagem entre " ".

//SUGESTÃO DE NOME: let trabalhoHorasDiarias e let valorDiário



//**1. EXERCÍCIO DE ESCRITA DE CÓDIGO**/

/* let nomeUsuario 
   let idadeUsuario 

   console.log(typeof nomeUsuario, typeof idadeUsuario) */

//-----------> O tipo impresso foi undefined, pela falta de um valor na variável.

let nomeUsuario = prompt("Qual o seu nome?")
let idadeUsuario = prompt("Qual a sua idade?")

console.log(typeof nomeUsuario, typeof idadeUsuario) 

// A diferença que notei é que dessa maneira no console não apresenta as informaçõe inseridas pelo usuário 
// e sim o tipo da variável, que nesse caso eram String.

console.log("Olá",nomeUsuario,"você tem", idadeUsuario, "anos.")


//**2. EXERCÍCIO DE ESCRITA DE CÓDIGO**/

let comidaFavorita = prompt("Sua comida favorita é macarrão ao molho branco?")
let sobremesaFavorita = prompt("Sua sobremesa favorita é sorvete?")
let corFavorita = prompt("Sua cor favorita é verde?")


console.log("Sua comida favorita é macarrão ao molhor branco?", comidaFavorita, "Sua favorita é sorvete?", sobremesaFavorita, "Sua cor favorita é verde?", corFavorita)


const newLocal = 10
//**3. EXERCÍCIO DE ESCRITA DE CÓDIGO**/

let a = 10
let b = 20

a = b
let c = 10
b = c


console.log("O novo valor de a é",a)
console.log("O novo valor de b é",b)

