export const moviesSchema = `#graphql
    type Query {
        hello: String
        get_movies(limit: Int): String
    }

`.slice(8)