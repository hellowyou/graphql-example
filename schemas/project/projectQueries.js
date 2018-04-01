const {
    GraphQLList,
    GraphQLString
} = require('graphql');
const axios = require('axios');

const ProjectType = require('./projectType');


module.exports = {
    project: {
        type: ProjectType,
        args: {
            id: { type: GraphQLString}
        },
        resolve(parentValue, args) {
            return axios.get('http://localhost:3000/projects/' + args.id)
                .then(res => res.data, err => err.response);
        }
    },
    projects: {
        type: new GraphQLList(ProjectType),
        resolve(parentValue, args) {
            return axios.get('http://localhost:3000/projects')
                .then(res => res.data, err => err.response);
        }
    }
};