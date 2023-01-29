export const moviesSchema = `#graphql
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

    input AddMovie {
        userId:      Int!
        name:        String!
        director:    String!
        release:     Int
        image:       String
        description: String
        type:        String
        rating:      Float
        casts:       String
    }

    type User {
        id:            Int!
        name:          String!
        email:         String!
        createdAt:     String!
        password:      String!
        country:       String
    }

    type Query {
        get_movies(limit: Int): [Movie]
    }

    type Mutation {
        add_movie(movie: AddMovie!): String
    }

`.slice(8)