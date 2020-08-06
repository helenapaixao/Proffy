import express from 'express';

const app = express();

app.post('/users', (request,response) => {
  return response.json()
});

app.listen(3333);
