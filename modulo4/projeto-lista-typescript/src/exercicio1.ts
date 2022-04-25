// EXERCÍCIO 1

function introducingMe (name: string, birthdate: string): string {

    const userName = name;

    const splitDate = birthdate.split("/", 3);

    const day = splitDate[0];

    const mounth = splitDate[1];

    const year = splitDate[2];
    
    const introduce = `Olá! Me chamo ${userName}, nasci no dia ${day} do mês ${mounth} do ano de ${year}.`;


    return introduce
};

console.log(introducingMe("Danilo", "28/08/1998"));


