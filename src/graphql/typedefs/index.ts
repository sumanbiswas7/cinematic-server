import { moviesSchema } from "./moviesSchema";
import { usersSchema } from "./usersSchema";
import { uploadsSchema } from "./uploadsSchema";

export const typeDefs = `#graphql
    ${moviesSchema}
    ${usersSchema}
    ${uploadsSchema}
`


