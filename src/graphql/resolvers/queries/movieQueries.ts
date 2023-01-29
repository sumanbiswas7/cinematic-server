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



