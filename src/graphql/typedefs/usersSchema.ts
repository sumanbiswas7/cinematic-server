export const usersSchema = `#graphql
    input CreateUser {
        name:   String!
        email:      String!
        password: String!
        country: String
    }

    type User {
        id:        Int!
        name:      String!
        email:     String!
        createdAt: String!
        password:  String!
        country:   String
    }

    type Mutation {
        create_user(user: CreateUser!): String
    }

    type Query {
        get_users(limit: Int!): [User]
    }

`.slice(8)

