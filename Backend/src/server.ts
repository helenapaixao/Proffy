import express from 'express';

const app = express();

app.get('/users',() => {
    console.log('Acessou a Rota')
})


app.listen(3333);