const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} = require('graphql');
const axios = require('axios');

const ProjectType = require('./projectType');

module.exports = {
    addProject: {
        type: ProjectType,
        args: {
            title: {type: new GraphQLNonNull(GraphQLString)},
            description: {type: GraphQLString},
        },
        resolve(parentValue, args) {
            return axios.post('http://localhost:3000/projects', {
                title: args.title,
                description: args.description || '',
            })
                .then(res => res.data, err => err.response);
        }
    },
    deleteProject: {
        type: ProjectType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLString)}
        },
        resolve(parentValue, args) {
            return axios.delete('http://localhost:3000/projects/' + args.id)
                .then(res => res.data, err => err.response);
        }
    },
    editProject: {
        type: ProjectType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLString)},
            title: {type: GraphQLString},
            description: {type: GraphQLString},
        },
        resolve(parentValue, args) {
            return axios.patch('http://localhost:3000/projects/' + args.id, args)
                .then(res => res.data, err => err.response);
        }
    }
};