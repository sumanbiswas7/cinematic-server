import * as moviesQueries from "./queries/movieQueries";
import * as userMutations from "./mutations/usersMutation";
import * as notificationMutations from "./mutations/notificationMutations";
import * as userQueries from "./queries/userQueries";

export const Query = { ...moviesQueries, ...userQueries }
export const Mutation = { ...userMutations, ...notificationMutations }

export const resolvers = { Query, Mutation }

