import * as moviesQueries from "./queries/movieQueries";
import * as usersQueries from "./mutations/usersMutation";

export const Query = { ...moviesQueries }
export const Mutation = { ...usersQueries }

export const resolvers = { Query, Mutation }

