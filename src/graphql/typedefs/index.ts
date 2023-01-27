import { moviesSchema } from "./moviesSchema";
import { usersSchema } from "./usersSchema";

export const typeDefs = `#graphql
    ${moviesSchema}
    ${usersSchema}
`


