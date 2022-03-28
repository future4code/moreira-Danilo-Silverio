// EXERCÍCIO 1

// a) ------------------------------------------------------>

const minhaString: string = "Sou uma string";

// Caso tente atribuir o valor de um número na variável vai ocasionar um erro. Como a variável foi determina como tipo string não possível inserir uma informação diferente. Para que isso fosse possível seria necessário adaptar o tipo da da variável, por exemplo, tipo string | number (método Union). 

// b) ------------------------------------------------------>

const meuNumero: number = 2;

// Podemos utilizar do método Union e determinar a variável como somente : number podemos alterar para : number | string.

const meuNumero2: number | string = "24";

// c) ------------------------------------------------------>

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
};

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
};

const pessoa1 = {
    nome: "Albert",
    idade: 26,
    corFavorita: Cores.VIOLETA
};
const pessoa2 = {
    nome: "Clair",
    idade: 43,
    corFavorita: Cores.AZUL
};
const pessoa3 = {
    nome: "Derek",
    idade: 14,
    corFavorita: Cores.VERDE
};