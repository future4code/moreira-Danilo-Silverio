//-------------------------------------------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//-------------------------------------------------------------------------------

// EXERCÍCIO 1-A)

// 1º console.log ----> Vai ser impresso no console "Matheus Nachtergaele"

// 2º console.log ----> Vai ser impresso no console "Virginia Cavendish"

// 3º console.log ----> Vai ser impresso no console um objeto com "canal: Globo" e "horario: 14h".

// EXERCÍCIO 2-A)

// 1º console.log ----> Vai ser impresso no console um objeto contendo as informações do cachorro, (nome: "Juca", idade: 3, raca: "SRD")

// 2º console.log ----> Com a cópia do modelo do cachorro e a alteração de nome, vai ser impresso no console um objeto contendo as informações do gato, (nome: "Juba", idade: 3, raca: "SRD")

// 3º console.log ----> Com a cópia do modelo do gato e alteração de nome, vai ser impresso no console um objeto contendo as informações da tartaruga, (nome: "Jubo", idade: 3, raca: "SRD")

// EXERCÍCIO 2-B) ----> Ele faz um espelhamento do objeto, cria uma cópia do objeto inserido com seu modelo de informações. Esse processo também é conhecido como SPREAD. 

// EXERCÍCIO 3-A)

// 1º console.log ----> False

// 2º console.log ----> Undefined

// EXERCÍCIO 3-B) ----> O valor "false" foi impresso no console pois esse era o valor da propriedade "backender" no nosso objeto "pessoa".
//                      O valor undefined foi impresso pois a propriedade listada para busca não existe ou possui valor.

//-------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//-------------------------------------------------------------------------------


//-------------------------------------------------------------------------------
// EXERCÍCIO 1
//-------------------------------------------------------------------------------


// A)

const pessoa = {

    nome: "Danilo",
    apelidos: ["Dani", "Dan", "DG"]
}

function nomeEApelido (objeto, propriedade){

    return `Eu sou ${objeto}, mas pode me chamar de: ${propriedade[0]}, ${propriedade[1]} ou ${propriedade[2]}.`

}

console.log(nomeEApelido(pessoa.nome, pessoa.apelidos))

// B)

const novosApelidos = {

    ...pessoa,

    apelidos: ["Nilo", "Damn", "Danlo"]
}

console.log(nomeEApelido(novosApelidos.nome, novosApelidos.apelidos))


//-------------------------------------------------------------------------------
// EXERCÍCIO 2
//-------------------------------------------------------------------------------


// A)

const pessoa1 = {

    nome: "Danilo",
    idade: 23,
    profissao: "Estudante"
}

const pessoa2 = {

    nome: "Luffy",
    idade: 20,
    profissao: "Pirata"
}

// B)

function pessoasInfo (pessoa) {

    let array = []

    array.push(pessoa.nome)
    array.push(pessoa.nome.length)
    array.push(pessoa.idade)
    array.push(pessoa.profissao)
    array.push(pessoa.profissao.length)

    return array
}

console.log(pessoasInfo(pessoa1))

console.log(pessoasInfo(pessoa2))
 


//-------------------------------------------------------------------------------
// EXERCÍCIO 3
//-------------------------------------------------------------------------------
 

const carrinho = []

const fruta1 = {

    nome: "Maçã",
    disponinilidade: true
}

const fruta2 = {

    ...fruta1,
    nome: "Bergamota"
}

const fruta3 = {

    ...fruta2,
    nome: "Laranja"
}

function carrinhoDeFruta(fruta) {

    carinho = []
    
    carrinho.push(fruta1, fruta2, fruta3)
    
    return carrinho
}

console.log(carrinhoDeFruta(carrinho))