import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).send('Olá Node js, com rotas a partir do router')
})

router.get('/tarefas', (request, response) => {
    const msg = 'att em tempo real';
    response.status(200).send('Você está na página de tarefas!' + ' ' + msg)
    console.log(msg)
})

export default router;
