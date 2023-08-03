const { gql } = require('apollo-server-express');

const typeDefs = gql `
type Passenger {
    _id: ID
    first_name: String
    last_name: String
    Flight_number: String
    Nanny: Boolean
    phone_number: String
    email: String
    children: String
}

type Children {
    _id: ID
    first_name: String
    gaurdian: Passenger
}

type User {
  _id: ID!
  firstname: String!
  lastname: String!
  phonenumber: String!
  username: String!
  email: String!
}

type Auth {
  token: ID!
  user: User
}


    type Query {
        passengers:[Passenger]
        Flight_number(Flight_number: String): [Passenger]
      }
    
    type Mutation {

      addUser(
        firstname: String!
        lastname: String!
        phonenumber: String!
        username: String!
        email: String!
        password: String!
      ): Auth

        addPassenger(
            first_name: String!, 
            last_name: String!, 
            Nanny: Boolean!, 
            phone_number: String!,
            email: String!, 
            children: String
            ): Passenger

        addChildren(
            first_name: String!
            guardianId: ID!
        ): Children


    updatePassenger(
        _id: ID!
        first_name: String
        last_name: String
        Flight_number: String
        Nanny: Boolean
        phone_number: String
        email: String
        children: String
      ): Passenger

      login(username: String!, password: String!): Auth
    }
`;


module.exports = typeDefs;