const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    first_name: String
    last_name: String
    Flight_number: String
    Nanny: Boolean
    phone_number: String
    email: String
}

    type Query {
        user:[User]
      }
`;


module.exports = typeDefs;