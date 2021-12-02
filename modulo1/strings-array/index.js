//---------------------------------------------------------------------------------------------------------
//EXERCÍCIOS DE INTERPRETAÇÃO DE INTERPRETAÇÃO DE CÓDIGO
//---------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------
// (EXERCÍCIO 1)
//---------------------------------------------------------------------------------------------------------

// a. undefined

// b. null

// c. 11

// d. 3

// e. 11

// f. 9 

//---------------------------------------------------------------------------------------------------------
// (EXERCÍCIO 2) 
//---------------------------------------------------------------------------------------------------------

// RESPOSTA: O valor será: SUBI NUM ÔNIBUS EM MIRROCOS 27


//---------------------------------------------------------------------------------------------------------
//EXERCÍCIOS DE INTERPRETAÇÃO DE ESCRITA DE CÓDIGO
//---------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------
// (EXERCÍCIO 1) > E-mail e Nome do Usário + Mensagem
//---------------------------------------------------------------------------------------------------------

const nomeUsuario = prompt('Olá, pode me dizer o seu nome?')
const emailDoUsuario = prompt ('Qual e-mail você utiliza?')
const cadastro = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`

console.log(cadastro)

//---------------------------------------------------------------------------------------------------------
// (EXERCÍCIO 2) > Array com 5 comidas preferidas
//---------------------------------------------------------------------------------------------------------

// a) Imprima no console o array completo.

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista.

let comidasPreferidas = ["Macarrão ao molho branco", "Sorvete", "Hamburguer", "Frango grelhado", "Chocolate"]
console.log(comidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const comidaUsuario = prompt("Qual a sua comida preferida?")
comidasPreferidas = ["Macarrão ao molho branco", comidaUsuario, "Hamburguer", "Frango grelhado", "Chocolate"]

console.log(comidasPreferidas)

//---------------------------------------------------------------------------------------------------------
// (EXERCÍCIO 3) > Faça um programa:
//---------------------------------------------------------------------------------------------------------

// a) Crie um array vazio e guarde-o em uma variável, chamada ListaDeTarefas

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array.

// c) Imprima o array no console.

// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2.

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no consoleImprima no console.


let listaDeTarefas = []

const tarefa1 = prompt("Pode me dizer uma tarefa que precise realizar no dia?")
const tarefa2 = prompt("Pode me dizer uma segunda tarefa que precise realizar no dia?")
const tarefa3 = prompt("E uma terceira tarefa?")

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log(listaDeTarefas)

const indice = Number(prompt("Agora, preciso que me diga um número de 0 a 2:"))

let listaDeDuasTarefas = listaDeTarefas

listaDeDuasTarefas.splice(indice, 1)

console.log(listaDeDuasTarefas)
