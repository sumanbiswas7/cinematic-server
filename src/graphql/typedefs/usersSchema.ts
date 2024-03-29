export const usersSchema = `#graphql
    type User {
        id:            Int!
        name:          String!
        email:         String!
        createdAt:     String!
        password:      String!
        country:       String
        notifications: [Notification]
        movies:        [Movie]
        friends:       [String]
        sentReq:       [String]
        sentSug:       [String]
    }

    input UserInput {
        name:     String!
        email:    String!
        password: String!
        country:  String
    }

    input UserUpdateInput{
        userId:   Int!
        name:     String
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
        from:       String!
        userId:     Int!
    }

    input AcceptRequest {
        userId: Int!
        from: String
    }

    type Movie {
        id:          Int!
        name:        String!
        director:    String!
        release:     Int
        image:       String
        description: String
        type:        String
        rating:      Float
        casts:       String
        createdAt:   String
        user:        User
    }


    type Mutation {
        create_user(user: UserInput!): String
        update_user(user: UserUpdateInput!): String

        send_request(request: NotificationInput!): String
        accept_request(request: AcceptRequest!): String
        send_suggestion(suggestion: NotificationInput!): String

        clear_notifications(userId: Int!): String
        delete_notification(notId: Int!): String
    }

    type Query {
        get_users(limit: Int!): [User]
        get_user(id: Int!): User
        search_user(text: String!): [User]
        get_authuser(email: String!): User
    }

`.slice(8);
