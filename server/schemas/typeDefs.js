const { gql } = require('apollo-server-express');

const typeDefs = gql `
type Passenger {
  _id: ID!
  firstname: String!
  lastname: String!
  flight_number: String!
  phonenumber: String!
  email: String!
  price: String!
  children: String!
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
  status: Boolean!
}

type Auth {
  token: ID!
  user: User
}


    type Query {
        passengers:[Passenger]
        flight_number(flight_number: String): [Passenger]
      }
    
    type Mutation {

      addUser(
        firstname: String!
        lastname: String!
        phonenumber: String!
        username: String!
        email: String!
        password: String!
        status: Boolean!
      ): Auth

      addPassenger(
        firstname: String!
        lastname: String!
        flight_number: String!
        phonenumber: String!
        email: String!
        price: String!
        children: String!
      ): Passenger

        addChildren(
            first_name: String!
            guardianId: ID!
        ): Children


    updatePassenger(
        _id: ID!
        first_name: String
        last_name: String
        flight_number: String
        Nanny: Boolean
        phonenumber: String
        email: String
        children: String
      ): Passenger

      login(username: String!, password: String!): Auth
    }
`;


module.exports = typeDefs;