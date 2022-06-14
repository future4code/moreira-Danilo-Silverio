// EXERCÍCIO 2
type StringOrNumber = string | number;

export type User = {
    id: StringOrNumber,
    name: string,
    phone: string,
    email: string,
    website: string
};

//EXERCÍCIO 5
export type Post = {
    userId: StringOrNumber,
    id: StringOrNumber,
    title: string,
    body: string
};