//-----------------------------------------------------------------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//-----------------------------------------------------------------------------------------------------


// EXERCÍCIO 1 --------------------------->

// A) No console será impresso, respectivamente, 10 e 50.

// B) Não haveria nada impresso no console, a chamada da função ocorreu, contudo, não foi solicitado para ser impressa.


// EXERCÍCIO 2 --------------------------->

// A) A função formata o texto inserio pelo usuário em apenas letras minúsculas e com base nisso verifica se há a palavra "cenoura" nele. Se possuir a palavra "cenoura" no console será impresso true ou false caso não tenha.

// B) i. True ----- ii. True ------ iii. False


//-----------------------------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//-----------------------------------------------------------------------------------------------------


// EXERCÍCIO 1 --------------------------->

// A) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// B) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function imprimirFrase() {
    
    console.log("Eu sou Danilo, tenho 23 anos, moro em Curitiba e sou estudante")
}

imprimirFrase()


const nome = `Nicole`
const idade = `21`
const cidade = `Curitiba`
const profissao = `Esteticista especialista em tratamentos faciais`

function imprimirFrasePessoa(nome, idade, cidade, profissao) {

    console.log(`Eu sou a ${nome} e tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    
    return nome, idade, cidade, profissao
}

imprimirFrasePessoa(nome, idade, cidade, profissao)


// EXERCÍCIO 2 --------------------------->

// A) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// B) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

// C) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

// D) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function somaDoisNúmeros(numero1, numero2) {

    const soma = numero1 + numero2

    return soma
}

const resultadoA = somaDoisNúmeros(28, 413)

console.log(resultadoA)

// --------------------------->

function doisNumeros(numeroX, numeroY) {

    const maior = numeroX >= numeroY

    return maior
}

const resultadoB = doisNumeros(4128, 3250)

console.log(resultadoB)

// --------------------------->



// --------------------------->

function mensagem(frase) {

    let frases = "Estou fazendo o exercício prático da Labenu!"
    
    frases = frases.toUpperCase()

    console.log(frases)

    frases = frases.length

    console.log(frases)
}

mensagem()


// EXERCÍCIO 3 --------------------------->

const numeroUsuario = Number(prompt("Escreva um número:"))

const numeroUsuario2 = Number(prompt("Escreva outro número:"))

console.log("Números inseridos:", numeroUsuario, "e", numeroUsuario2)

function soma(conta) {

    const somar = numeroUsuario + numeroUsuario2
    return somar
}

function subtrair(conta2) {

    const subtracao = numeroUsuario - numeroUsuario2
    return subtracao
}

function dividir(conta3) {

    const divisao = numeroUsuario / numeroUsuario2
    return divisao
}

function multiplicar(conta4) {

    const multiplicacao = numeroUsuario * numeroUsuario2
    return multiplicacao
}

let contaAdicao = soma()
let contaSubtracao = subtrair()
let contaDivisao = dividir()
let contaMultiplicar = multiplicar()

console.log("Soma:", contaAdicao)
console.log("Diferença:", contaSubtracao)
console.log("Multiplicação:", contaMultiplicar)
console.log("Divisão:", contaDivisao)


