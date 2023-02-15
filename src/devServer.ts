import { startStandaloneServer } from "@apollo/server/standalone"
import { ApolloServer } from '@apollo/server';
import { typeDefs } from "./graphql/typedefs/index";
import { resolvers } from "./graphql/resolvers/index";

const app = new ApolloServer({
    typeDefs,
    resolvers,
});


(async function startDevServer() {
    const { url } = await startStandaloneServer(app, {
        context: async ({ req }) => {
            return req
        }
    });
    console.log(`🚀  Server ready at: ${url}`);
})()