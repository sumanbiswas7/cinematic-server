export const usersSchema = `#graphql
    input UserInput {
        name:     String!
        email:    String!
        password: String!
        country:  String
    }

    type Notification {
        id:         Int!
        request:    Boolean!
        suggestion: Boolean!
        from:       String!
        createdAt:  String!
    }

    type User {
        id:            Int!
        name:          String!
        email:         String!
        createdAt:     String!
        password:      String!
        country:       String
        notifications: [Notification]
    }

    type Mutation {
        create_user(user: UserInput!): String
    }

    type Query {
        get_users(limit: Int!): [User]
        get_user(id: Int!): User
    }

`.slice(8)
