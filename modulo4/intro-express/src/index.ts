//EXERCÍCIO 1
import { users, posts } from './data/data';
import { Post } from './types/types';
import express from 'express';
import cors from 'cors';

const app = express();

app.use (express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Backend...")
});

app.get("/", (req, res) => {

    res.status(200).send("Hello from Express");
});

// EXERCÍCIO 4
app.get("/users", (req, res) => {
    
    res.status(200).send(users)
});

// EXERCÍCIO 7

app.get("/posts", (req, res) => {
    
    res.status(200).send(posts)
});

// EXERCÍCIO 8
app.get('/posts/:userid', (req, res) => {
    const post: Post[] = posts.filter((post) => {
        if (Number(req.params.userid) === post.userId) {
            return post;
        }
    }).flat(1);
    res.status(200).send(post);
});