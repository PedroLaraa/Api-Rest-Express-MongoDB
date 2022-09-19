
const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso NodeJS',
    '/livros': 'Página de Livros',
    '/autores': 'Listagem de Autores'
};

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end(rotas[req.url]);

});

server.listen(port, () => {
    console.log('Server rodando na porta:', port);
});
