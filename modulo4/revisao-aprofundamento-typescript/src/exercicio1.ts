// EXERCÍCIO 1

// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
//RESPOSTA: É apontado um erro que um número não pode ser atribuído a uma varíavel classifica como string e não como number.

//const minhaString: string = 4;

//--------------------|
//b)Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
//RESPOSTA: Podemos atribuir mais tipos através do método UnionType, classificando como tipo1|tipo2. Podemos também criar um type específico para receber os tipos necessários.

const meuNumero: number|string|boolean = 2;
//--------------------|

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

/* `nome`, que é uma string;

    `idade`, que é um número;

    `corFavorita`, que é uma string. */

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

enum Cor {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
};

type Pessoas = {
    nome: string,
    idade: number,
    corFavorita: Cor
};

const albert: Pessoas = {
    nome: "Albert",
    idade: 24,
    //corFavorita: "Verde"
    corFavorita: Cor.AMARELO
}

const brian: Pessoas = {
    nome: "Brian",
    idade: 29,
    //corFavorita: "Preto"
    corFavorita: Cor.ANIL
}

const lucy: Pessoas = {
    nome: "Lucy",
    idade: 27,
    //corFavorita: "Roxo"
    corFavorita: Cor.VERDE
}

//--------------------|
// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.


//--------------------|