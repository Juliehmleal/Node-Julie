import express from 'express';
import router from './router.mjs';
const app = express();

app.use(router)


app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})

