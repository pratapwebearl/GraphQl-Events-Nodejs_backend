const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
// const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// const Schema = require('mongoose').Schema;
const graphQlSchema = require('./graphql/schema/index');

const graphQlResolvers = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');


const app = express();
const events = [];
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(isAuth);
app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
})

);

mongoose.connect(`mongodb+srv://shop-app:${process.env.MONGO_PASSWORD}@cluster0.arque.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(8082, () => console.log("port number 8082 is running"));

    })
    .catch(err => {
        console.log(err);
    });