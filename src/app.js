
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Curso de NodeJs');

});

server.listen(port, () => {
    console.log('Server rodando na porta: ', port);
});
