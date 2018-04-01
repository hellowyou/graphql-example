const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schemas/schema');

const app = express();
const PORT = 4000;

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true,
    formatError(err) {
        console.log(err);
        return {
            message: err.message,
        }
    }
}));

app.listen(PORT, () => {
    console.log('Server running on http://localhost:' + PORT);
})