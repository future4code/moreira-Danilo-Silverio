//EXERCÍCIO 3

//Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

//Observação: A lista de tarefas só estará atualizada durante a execução do código. Ao rodar novamente a lista começará novamente a partir de seu estado inicial

//$ npm start "Comprar Leite"

//Tarefa adicionada com sucesso!

/*tarefas: [
	"Lavar a louça",
	"Comprar Leite"
]*/

const verifyTask = () => {
   
    const task = [];

    task.push(process.argv[2]);

    if(task != [undefined]){
        console.log(`Tarefa adicionada com sucesso!`, task);
    }
    else if (task = [undefined]) {
        console.log("Adicione uma tarefa!")
    }
    
};

verifyTask();

