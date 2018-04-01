const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');



module.exports = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {type: GraphQLString,  description: 'The id of the project.'},
        title: {type: GraphQLString, description: 'The title of the project.'},
        description: {type: GraphQLString, description: 'The description of the project.'},
    })
});