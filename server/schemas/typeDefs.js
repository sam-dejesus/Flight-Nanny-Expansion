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
    _id: ID
    firstname: String
    lastname: String
    phonenumber: String
    username: String
    email: String
  }

    type Query {
        passengers:[Passenger]
        Flight_number(Flight_number: String): [Passenger]
      }
    
    type Mutation {
        createUser(
            firstname: String!
            lastname: String!
            phonenumber: String!
            username: String!
            email: String!
          ): User
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
    }
`;


module.exports = typeDefs;