const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
const {extend} = require('lodash');

const {customerQueries, customerMutations} = require('./customer');
const {projectQueries, projectMutations} = require('./project');

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: extend(customerQueries, projectQueries)
});

// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: extend(customerMutations, projectMutations)
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});