// EXERCÍCIO 5

enum ROLE {
    ADMIN = "admin",
    USER = "user"
};

type User = {
    name: string,
    email: string,
    role: ROLE
}[];

const usuarios: User = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
];

function usuariosAdm(admin: User): string[] {

    const administradores = admin.filter((pessoa) => {
        return pessoa.role === ROLE.ADMIN
    });

    const admEmails = administradores.map((email) => {
        return email.email
    });

    return admEmails
};

console.log(usuariosAdm(usuarios));