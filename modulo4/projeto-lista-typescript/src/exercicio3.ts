// EXERCÍCIO 3

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type filmeInfo = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao: number | null | undefined;
};

function infoFilmes(nome: string, anoLancamento: number, genero: GENERO, pontuacao?: number
): filmeInfo {

  const infos: filmeInfo = {
    nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
    pontuacao: pontuacao,
  };

  return infos;
}

console.log(infoFilmes("Harry Potter and the Philosopher's Stone", 2001, GENERO.ACAO, 1000));

