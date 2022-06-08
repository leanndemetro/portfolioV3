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
      deletecontactSubmission(id: Int!): DeletePeopleResponse 
    }

  
    type DeletePeopleResponse {
      id: Int
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

            deletecontactSubmission: (_, args, ctx) => {
                return ctx.prisma.contactSubmission.delete({
                    where: {
                        id: args.id,
                    },
                });
            },
        },
    },
};

export default contactFormService