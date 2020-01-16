## Setting up backend with Node.js

**npm init -y**

### installing dependencies

**npm install --save-dev babel-core babel-cli babel-preset-env**
create file .babelrc 
**npm install babel-watch --save-dev**
**npm install express** 
**npm install graphql graphql-tools apollo-server-express**
**npm 

**GraphiQL** - is in browser interactive graphgl IDE. We can wright directly querys mutations in the browser and send those querys mutations to out graphql endpoint. Recomended for testing api

**resolvers** -are simple functions which are assigned to a query or to mutation and contain the logic, which is actually needed

---
```GrapgQL
query Course($id: String!){
  course (id: $id) {
    id
    title
    author
    description
    voteCount
  }
}
```
---
```
query Courses{
  myFirstCourse: course(id: "1"){
    ...courseFields
  }
  mySecondCourse: course(id: "2"){
    ...courseFields
  }
}

fragment courseFields on Course {
  id
  title
  author
  description
  topic
  url
  voteCount
}
```
---
**fragments - is reusable piece of code for query**



