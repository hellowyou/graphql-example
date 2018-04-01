const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');



module.exports = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString,  description: 'The id of the customer.'},
        name: {type: GraphQLString, description: 'The name of the customer.'},
        email: {type: GraphQLString, description: 'The email of the customer.'},
        age: {type: GraphQLInt, description: 'The age of the customer.'}
    })
});