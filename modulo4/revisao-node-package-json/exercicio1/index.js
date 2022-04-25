// EXERCÍCIO 1

// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//RESPOSTA: Os parâmetros são sempre passados com process.argv[(Apatir do número 2)] e após o diretório e nome do arquivo na linha de código. Se possuímos um array de nomes e queremos acessa-los vamos colocar na linha do código node (diretório do arquivo) (nome do arquivo) (parâmetro) -> ex: node src /index.js Danilo. Podemos encurtar esse caminho com um script customizado que faça a função de node src ./index.js. Nesse caso na linha de comando ficaria apenas npm run start Danilo.
//-------------------|

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."
//RESPOSTA:

const userName = process.argv[2];

const userAge = Number(process.argv[3]);

// console.log(`Olá, ${userName}! Você tem ${userAge} anos.`)

//-------------------|

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const inSevenYears = userAge + 7;

console.log(`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${inSevenYears}.`);
