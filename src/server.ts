import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './graphql/resolvers/index';
import { typeDefs } from './graphql/typedefs/index';

const app = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

export const handler = startServerAndCreateLambdaHandler(app, {
  context: async ({ event }) => {
    return event
  },
});

