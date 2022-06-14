import { User, Post  } from "../types/types";

// EXERCÍCIO 3
export const users: User[] = [
    {
        id: 1,
        name: "Danilo",
        phone: "(41) 9 0000-0000",
        email: "danilo@labenu.com",
        website: "danilo.com.br",

    },
    {
        id: 2,
        name: "Nicole",
        phone: "(41) 9 1111-1111",
        email: "nicole@labenu.com",
        website: "nicole.com.br",

    },

];

// EXERCÍCIO 6

// 

export const posts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: "Um novo post",
        body: "Um post bonito"
    },
    {
        userId: 2,
        id: 2,
        title: "Um novo post pensado",
        body: "Um post bonito e pensado"
    }
];
