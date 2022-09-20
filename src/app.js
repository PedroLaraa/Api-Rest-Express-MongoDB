import express from 'express';

import db from './config/dbConnect.js';

import routes from './routes/index.js';

const app = express();

routes(app);

db.on("error", console.log.bind(console, 'Error de conexão!'));

db.once("open", () => {
    console.log('A conexão com o DB foi feita com sucesso!!!');
});

export default app;
