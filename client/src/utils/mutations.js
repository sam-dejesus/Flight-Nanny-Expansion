import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//Need to add the differentiation between nanny and user with boolen value still
export const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $phonenumber: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, phonenumber: $phonenumber, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;