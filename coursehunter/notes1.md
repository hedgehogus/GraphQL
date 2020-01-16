## Setting up backend with Node.js

**npm init -y**

### installing dependencies

**npm install --save-dev babel-cli babel-preset-env**

create file .babelrc :

{
  "presets": ["env"]
}

**npm install babel-watch --save-dev**
**npm install express** 

**npm install graphql graphql-tools apollo-server-express**

*server.js*
```java script
import express from 'express';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';

const app = express();

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

app.use('/graphql', bodyParser.json(), graphqlExpress({}));

app.listen(4000, () => {
    console.log('Express server rinning on port 4000');
});
```

*schema.js*
```java script
const typeDefs = [`
    type Course {
        id: String
        title: String
        author: String
        description: String
        topic: String
        url: String
        voteCount: Int
    }
    type Query {
        allCourses(searchTerm: String): [Course]
        course(id: String!): Course           // ! - mandatory parameter, withot ! - optional
    }
    type Mutation {
        addCourse(title: String!, author: String!, description: String, topic: String!, url: String): Course
        upvote(id: String!): Course
        downvote(id: String!): Course
    }
`]

```
**GraphiQL - is in browser interactive graphgl IDE. We can wright directly querys mutations in the browser and send those querys mutations to out graphql endpoint. Recomended for testing api**


