// EXERCÍCIO 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// |npm run start add 2 2| |npm run start sub 2 2| |npm run start mult 2 2| |npm run start div 2 2|
// "Resposta: Número resultante da equação"

const operator = process.argv[2];

const num1 = Number(process.argv[3]);

const num2 = Number(process.argv[4]);

const result = (operator, num1, num2) => {
    switch (operator) {
      case "add":
          console.log("Resposta:", num1 + num2);
        break;
      case "sub":
          console.log("Resposta:", num1 - num2);
        break;
      case "div":
          console.log("Resposta:", num1 / num2);
        break;
      case "mult":
          console.log("Resposta:", num1 * num2);
        break;
    }
  };

result(operator, num1, num2);