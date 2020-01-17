import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import mongoose from 'mongoose';

import schema from './schema'

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connerction established succesfully');
})

// app.get('/', (req, res) => res.send('hello world'));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
})); 

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

const port = 4321;

app.listen(port, () => console.log('express server running on port ' + port));