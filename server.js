import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
    const message1 = "Primeiro servidor rodando em node com o uso do express";
    const message2 = "Mais uma res inserida.";
    res.send(`${message1}<br>${message2}`);
})


app.listen(port, () => {
    console.log(`Servidor está rodando dentro da url http://localhost:${port}`);
})