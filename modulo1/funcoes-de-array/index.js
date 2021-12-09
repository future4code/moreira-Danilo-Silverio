//-----------------------------------------------------------------------------------------
//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//-----------------------------------------------------------------------------------------

// EXERCÍCIO 1 ---> Vai ser impresso no console um novo array com itens e suas posições do array:
// similar a -->   nome: `Amanda Rangel`, apelido: `Mandi` 0
//                 nome: `Laís Petra`, apelido: `Laura` 1
//                 nome: `Leticia Chijo`, apelido: `Chijo` 2


// EXERCÍCIO 2 ---> Vai ser impresso no console um novo array:
// similar a -->    [...] Amanda Rangel
//                        Laís Petra
//                        Letícia Chijo

// EXERCÍCIO 3 ---> Vai ser impresso no console um filtro array original com os itens que possuem apelidos diferentes de Chijo:
// similar a -->   nome: `Amanda Rangel`, apelido: `Mandi`
//                 nome: `Laís Petra`, apelido: `Laura`


//-----------------------------------------------------------------------------------------
//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//-----------------------------------------------------------------------------------------

// EXERCÍCIO 1 ------------------------------------->

console.log(`EXERCÍCIO 1`)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// A)

console.log(`LETRA A)`)

 const nomesDosPets = pets.map((item) => {
    return item.nome
 })

 console.log(nomesDosPets)

// B)

console.log(`LETRA B)`)

const racaSalsichas = pets.filter((item) => {

    return item.raca === "Salsicha"
})

console.log(racaSalsichas)

// C)

console.log(`LETRA C)`)

const racaPoodle = (item) => {

    return item.raca.includes("Poodle")
}

const mensagemDeDesconto = (item) => {

    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
}

const somentePoodles = pets.filter(racaPoodle)

const cupomPoodle2 = somentePoodles.map(mensagemDeDesconto)

console.log(cupomPoodle2)


// EXERCÍCIO 2 ------------------------------------->

console.log(`EXERCÍCIO 2`)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// A)

console.log(`LETRA A)`)

const nomeDosProdutos = produtos.map((item) => {

    return item.nome
})

console.log(nomeDosProdutos)

// B)

console.log(`LETRA B)`)

const produtosComDesconto = produtos.map((item) => {

    return item.nome + " " + (item.preco - (item.preco * 0.05)).toFixed(2) 
})

console.log(produtosComDesconto)

// C)

console.log(`LETRA C)`)

const bebidas = produtos.filter((item) => {

    return item.categoria === "Bebidas"

})

console.log(bebidas)

// D)

console.log(`LETRA D)`)

const produtosComYpe = produtos.filter((item) => {

    return item.nome.includes("Ypê")
})


console.log(produtosComYpe)

// E)

console.log(`LETRA E)`)

const produtosComYpeNoNome = ((item) => {

    return item.nome.includes("Ypê")
})

const compreYpe = (item) => {

    return `Compre ${item.nome} por ${item.preco}`
}

const produtosYpe = produtos.filter(produtosComYpeNoNome)

const compreProdutosYpe = produtosYpe.map(compreYpe)

console.log(compreProdutosYpe)




