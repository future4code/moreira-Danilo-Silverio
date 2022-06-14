import express from "express";
import cors from "cors";

import { toDos } from "./data/data";
import { toDo } from "./types/types";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

//-------------------------------------(EXERCÍCIO 1)
app.get("/ping", (req, res) => {
    res.status(200).send("Pong! 🏓")
});
//-------------------------------------(EXERCÍCIO 4)
app.get("/toDos", (req, res) => {
    
    const taskCompleted = toDos.filter(task => {
        return task.completed === true
    });

    res.status(200).send(taskCompleted);

});
//-------------------------------------(EXERCÍCIO 5)
app.post('/toDos', (req, res) => {
    
    const userId =  Number(req.headers.authorization);

    const id = req.body.id;

    const title = req.body.title;

    const completed = req.body.completed;

    const newItem:toDo = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    };

    toDos.push(newItem);


    res.status(200).send({toDos});
});