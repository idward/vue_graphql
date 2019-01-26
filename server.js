const {ApolloServer, gql} = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config({path: 'variable.env'});

//Connenct mLab database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log(`DB connection failed, ${err}`);
    });

const typeDefs = gql`
    type Todo {
        task:String,
        completed:Boolean
    }
    type Query {
        getTodos:[Todo]
    }
`;

const server = new ApolloServer({typeDefs});

server.listen(4500).then(({url}) => {
    console.log(`Server is listening on ${url}`);
});