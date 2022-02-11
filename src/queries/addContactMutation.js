import { gql } from "@apollo/client";
const addContactMutation = gql`
  mutation addContact($name: String!, $email: String!, $message: String!) {
    addContact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`;

export { addContactMutation };
