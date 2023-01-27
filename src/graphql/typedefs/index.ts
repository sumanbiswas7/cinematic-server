import { moviesSchema } from "./movies/moviesSchema";
import { usersSchema } from "./movies/usersSchema";

export const typeDefs = `#graphql
    ${moviesSchema}
    ${usersSchema}
`


