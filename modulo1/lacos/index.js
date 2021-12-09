//------------------------------------------------------------------------------------------
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//------------------------------------------------------------------------------------------

// EXERCÍCIO 1 ----> O código está dizendo que enquanto a variável i for menor do que 5 é para continuar rodando o código, após isso ele altera a variável valor para somar ao valor de i.
//             ----> Portanto, no console será impresso número 10.


// EXERCÍCIO 2 ----> 

// A) No console será impressor 19, 21, 23, 25, 27, 30.
// B)

// EXERCÍCIO 3 ----> No console log seria impresso o seguinte resultado:
//                   *
//                   **
//                   ***
//                   ****


//------------------------------------------------------------------------------------------
// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//------------------------------------------------------------------------------------------

// EXERCÍCIO 1 ---->

const quantidadeBichosDeEstimacaoUsuario = Number(prompt(`Quantos bichos de estimação você possui?`))
   if(quantidadeBichosDeEstimacaoUsuario <= 0) {
        console.log(`Que pena! Você pode adotar um pet!`) 
         } 

    const BichosDeEstimacao = []
    let i = 0

    while(i < quantidadeBichosDeEstimacaoUsuario){
        BichosDeEstimacao.push(prompt(`Escreva o nome deles, um de cada vez.`))
            i++
                }

    console.log(BichosDeEstimacao)


// EXERCÍCIO 2 ---->       

let arrayOriginal = [10, 20, 30, 40, 50, 63, 75]

// A)

function imprimirArrayOriginal(array){

    for(const valor of array)

    console.log(valor)
}

imprimirArrayOriginal(arrayOriginal)

// B)

function imprimirArrayDividido(array){

    for(const valor of array){

    let valorDividido = valor / 10

    console.log(valorDividido)
}
}

imprimirArrayDividido(arrayOriginal)

// C)

function imprimeNumerosPares(array){

    const listaDeNumerosPares = []

    for(let numero of array){

        if(numero % 2 === 0){

            listaDeNumerosPares.push(numero)
        }
    }
    console.log(listaDeNumerosPares)
}

console.log(imprimeNumerosPares(arrayOriginal))

// D)

arrayOriginal = [10, 20, 30, 40, 50, 63, 75]

let arrayString = []

function imprimeIndex (array) {

    for(i = 0; i < arrayOriginal.length; i++){

        arrayString.push(`O elemento do index ${i} é ${arrayOriginal[i]}`)
    } 
        return arrayString
}
console.log(imprimeIndex(arrayString))

// E)

function imprimeMaiorEMenor (array){

    const valorMaximo = 0

    const valorMinimo = 0


}