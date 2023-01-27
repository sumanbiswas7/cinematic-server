import * as moviesQueries from "./queries/movieQueries";
import * as userMutations from "./mutations/usersMutation";
import * as userQueries from "./queries/userQueries";

export const Query = { ...moviesQueries, ...userQueries }
export const Mutation = { ...userMutations }

export const resolvers = { Query, Mutation }

