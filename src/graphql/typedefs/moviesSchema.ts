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

    input UpdateMovie {
        movieId:      Int!
        name:        String
        director:    String
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
        get_movies(limit: Int!): [Movie]
        get_movie(movieId: Int!): Movie
    }

    type Mutation {
        add_movie(movie: AddMovie!): String
        update_movie(movie: UpdateMovie!): String
    }

`.slice(8)