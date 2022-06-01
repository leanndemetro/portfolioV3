import { gql } from "apollo-server-core";


const contactFormService = {
    schema: gql`
    type contactSubmission {
      id: String
      name: String
      email: String
      phone: String
      message: String
    }

    extend type Mutation {
      createcontactSubmission(name: String!, email: String!, phone: String, message: String!): contactSubmission
    }
  `,
    resolvers: {
        Mutation: {
            createcontactSubmission: (_, args, ctx) => {
                return ctx.prisma.contactSubmission.create({
                    data: {
                        name: args.name,
                        email: args.email,
                        phone: args.phone,
                        message: args.message,
                    },
                });
            },
        },
    },
};

export default contactFormService