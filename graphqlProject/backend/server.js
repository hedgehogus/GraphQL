import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello world'));

const port = 4321;

app.listen(port, () => console.log('express rerver running on port 4000'))