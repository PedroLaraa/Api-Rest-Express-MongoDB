import express from 'express';

import db from './config/dbConnect.js';

import livros from './models/Livro.js';

const app = express();

db.on("error", console.log.bind(console, 'Error de conexão!'));

db.once("open", () => {
    console.log('A conexão com o DB foi feita com sucesso!!!');
});

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de NodeJs');

});

app.get('/livros/:id', (req, res) => {

    let {id} = req.params

    let index = buscaLivro(id);

    res.json(livros[index]);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);

    res.status(201).send('Livro cadastrado com sucesso!!!');

});

app.put('/livros/:id', (req, res) => {

    let {id} = req.params

    let index = buscaLivro(id);

    livros[index].titulo = req.body.titulo;

    res.json(livros);
});

app.delete('/livros/:id', (req, res) => {

    let {id} = req.params

    let index = buscaLivro(id);

    livros.splice(index, 1);

    res.send(`Livro ${id} removido com sucesso!!!`);
});

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
};

export default app;
