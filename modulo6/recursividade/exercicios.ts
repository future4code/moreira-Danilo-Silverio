// EXERCÍCIO 1

// a)
const printNumbers = (n: number) => {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  };

// b)

const printNumbersB = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers(n - 1);
    }
  };

//----------------------------------------------------------------------

// EXERCÍCIOS 2

export const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return calculateSumTo(n - 1, acc + n);
  };
  
  
  // Exemplos de uso:
  console.log(calculateSumTo(3));
  console.log(calculateSumTo(10));
  console.log(calculateSumTo(100));

//----------------------------------------------------------------------

// EXERCÍCIOS 3

export const calculateSumTo3 = (n: number): number => {
    var sum = 0
      for (var i = 0 ; i <= n ; i++) {
          sum += i;
    }
      return sum;
  };
      
  // Exemplos de uso:
  console.log(calculateSumTo3(3));
  console.log(calculateSumTo3(10));
  console.log(calculateSumTo3(100));

//----------------------------------------------------------------------

// EXERCÍCIOS 4

export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  // Exemplo de uso:
  const array = [1, 2, 3, 4];
  printArray(array);