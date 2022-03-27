// EXERCÍCIO 2

// A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.

// Código em Javascript:

// function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
//     const arrayDeCores = []

//     arrayDeCores.push(cor1,cor2,cor3) 
    
//     return arrayDeCores
// }

// EXERCÍCIO 2

function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string[] {
    const arrayDeCores: string[] = []

    arrayDeCores.push(cor1,cor2,cor3) 
    
    return arrayDeCores
};

const cores: string[] = imprimeTresCoresFavoritas(" Roxo", " Verde", " Preto");

console.log(`As cores escolhidas foram: ${cores}`)