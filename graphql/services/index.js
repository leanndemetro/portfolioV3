import { gql } from "apollo-server-micro";
import contactFormService from "../services/contactform"


const BaseSchema = gql`
  type Query {
    "app online"
    app: Boolean
  }
  type Mutation {
    app: Boolean
  }
`;

const BaseResolvers = {
  Query: {
    app: () => true,
  },
  Mutation: {
    app: () => true,
  },
};

const services = {
  schema: [
    BaseSchema,
    contactFormService.schema,
  ],
  resolvers: [
    BaseResolvers,
   contactFormService.resolvers,
  ],
};

export default services;