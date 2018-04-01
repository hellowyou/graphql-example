const {
    GraphQLList,
    GraphQLString
} = require('graphql');
const axios = require('axios');

const CustomerType = require('./customerType');


module.exports = {
    customer: {
        type: CustomerType,
        args: {
            id: { type: GraphQLString}
        },
        resolve(parentValue, args) {
            return axios.get('http://localhost:3000/customers/' + args.id)
                .then(res => res.data, err => err.response);
        }
    },
    customers: {
        type: new GraphQLList(CustomerType),
        resolve(parentValue, args) {
            return axios.get('http://localhost:3000/customers')
                .then(res => res.data, err => err.response);
        }
    }
};