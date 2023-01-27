export const usersSchema = `#graphql
    input CreateUser {
        name:   String!
        email:      String!
        password: String!
        country: String
    }

    type Mutation {
        create_user(user: CreateUser!): String
    }

`.slice(8)

