export const usersSchema = `#graphql
    type User {
        id:            Int!
        name:          String!
        email:         String!
        createdAt:     String!
        password:      String!
        country:       String
        notifications: [Notification]
    }

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
    
    input NotificationInput {
        request:    Boolean!
        suggestion: Boolean!
        from:       String!
        userId:     Int!
    }


    type Mutation {
        create_user(user: UserInput!): String
        send_request(request: NotificationInput!): String
        send_suggestion(suggestion: NotificationInput!): String
    }

    type Query {
        get_users(limit: Int!): [User]
        get_user(id: Int!): User
    }

`.slice(8);
