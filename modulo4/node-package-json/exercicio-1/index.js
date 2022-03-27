// EXERCÍCIO 1 -------------------------------------------------------------------------------------------->

// a) Os parâmetros são sempre passados com process.argv[(Apatir do número 2)] e após o diretório e nome do arquivo na linha de código. Se possuímos um array de nomes e queremos acessa-los vamos colocar na linha do código node (diretório do arquivo) (nome do arquivo) (parâmetro) -> ex: node src /index.js Danilo. Podemos encurtar esse caminho com um script customizado que faça a função de node src ./index.js. Nesse caso na linha de comando ficaria apenas npm run start Danilo.

// ---------.

// b)

const userName = process.argv[2];
const userAge = process.argv[3];

console.log(`Olá, ${userName}! Você tem ${userAge} anos.`)

// npm run start Danilo 23

// ---------.

// c)

const sevenYearsFromNow = Number(userAge) + 7;

console.log(`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${sevenYearsFromNow}`);

// ---------.