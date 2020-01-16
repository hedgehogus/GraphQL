import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const app = express();

// app.get('/', (req, res) => res.send('hello world'));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
})); 

app.use('/graphql', bodyParser.json(), graphqlExpress({}));

const port = 4321;

app.listen(port, () => console.log('express server running on port ' + port));