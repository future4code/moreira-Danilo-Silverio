// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  const altura = Number(prompt("Digite a altura do retângulo:"))
  const largura = Number(prompt("Digite a largura do retângulo:"))
  console.log( altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de seu nascimento:"))
  console.log( anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  
  return peso / (altura * altura) 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt(`Digite seu nome:`)
  const idade = prompt(`Digite sua idade:`)
  const email = prompt(`Digite o seu e-mail:`)
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  const cor1 = prompt(`Digite uma cor:`)
  const cor2 = prompt(`Digite mais uma cor:`)
  const cor3 = prompt(`Digite outra cor:`)
  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length - 1]
  
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 
  let ultimoElemento = array[array.length - 1]
  
  return array.replace(ultimoElemento, array[0])

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  let string1Maiscula = string1.toUpperCase()
  let string2Maiscula = string2.toUpperCase()

  return string1Maiscula === string2Maiscula

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  

}