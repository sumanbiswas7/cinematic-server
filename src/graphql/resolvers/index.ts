import * as movieQueries from "./queries/movieQueries";
import * as userQueries from "./queries/userQueries";

import * as movieMutations from "./mutations/movieMutations";
import * as userMutations from "./mutations/userMutation";
import * as notificationMutations from "./mutations/notificationMutations";

export const Query = { ...movieQueries, ...userQueries }
export const Mutation = { ...userMutations, ...notificationMutations, ...movieMutations }

export const resolvers = { Query, Mutation }

