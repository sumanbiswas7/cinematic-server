import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/**
 * Retrieve movies from database
 * @param args.limit how many movies to be retrieved 
 */
export async function get_movies(_: any, args: { limit: number }) {
    const limit = args.limit
    return await prisma.movies.findMany({ take: limit, include: { user: true } })
}

/**
 * Retrieves a movie by id from database
 * @param args.movieId id of the movie to be retrieved 
 */
export async function get_movie(_: any, args: { movieId: number }) {
    const movieId = args.movieId
    return await prisma.movies.findUnique({ where: { id: movieId }, include: { user: true } })
}

