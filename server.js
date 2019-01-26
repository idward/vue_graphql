const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type Todo {
        task:String,
        completed:Boolean
    }
    type Query {
        getTodos:[Todo]
    }
    type Mutation {
        addTodo(task:String,completed:Boolean):Todo
    }
`;

const resolvers = {
    Query: {
        getTodos() {
            return todos;
        }
    },
    Mutation: {
        addTodo(_, args) {
            let newTodo = {task: args.task, completed: args.completed};
            todos.push(newTodo);
            return newTodo;
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen(4500).then(({url}) => {
    console.log(`Server is listening on ${url}`);
});