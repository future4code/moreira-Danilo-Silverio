// EXERCÍCIO 1

// A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.
/* 
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  } */

// EXERCÍCIO 1
function checaTriangulo(a: string, b: string, c: string): string {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}

let result: string = checaTriangulo("a", "a", "a");
console.log(`Seu triângulo é: ${result}`);

result = checaTriangulo("a", "b", "c");
    console.log(`Seu triângulo é: ${result}`);
    
result = checaTriangulo("a", "b", "b");
    console.log(`Seu triângulo é: ${result}`);
