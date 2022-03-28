// EXERCÍCIO 2 -------------------------------------------------------------------------------------------->

const operator = process.argv[2];

const firstNum = Number(process.argv[3]);
const secondNum = Number(process.argv[4]);

const result = (operator, firstNum, secondNum) => {
  switch (operator) {
    case "add":
        console.log("Resposta:", firstNum + secondNum);
      break;
    case "sub":
        console.log("Resposta:", firstNum - secondNum);
      break;
    case "div":
        console.log("Resposta:", firstNum / secondNum);
      break;
    case "mult":
        console.log("Resposta:", firstNum * secondNum);
      break;
  }
};

result(operator, firstNum, secondNum);