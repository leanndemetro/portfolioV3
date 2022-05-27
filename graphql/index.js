import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import services from "./services";
import prisma from "../lib/prisma/prismaClient";

const apolloServer = new ApolloServer({
  typeDefs: services.schema,
  resolvers: services.resolvers,
  context: () => {
    return { prisma };
  },
  introspection: true,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export { apolloServer };