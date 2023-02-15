import { PrismaClient } from "@prisma/client";
import moment from "moment"
import { authorize } from "../../../helpers/authorization";

const prisma = new PrismaClient()

/**
 * Adds a new movie to the database
 * @param {AddMovie} args.movie movie object to be added in database   
 */
export async function add_movie(_: any, args: { movie: AddMovie }, ctx: any) {
    authorize(ctx)
    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newmovie = args.movie

    try {
        await prisma.movies.create({ data: { ...newmovie, createdAt } })
        return "Movie added successfully"
    } catch (error) {
        console.log(error)
    }
}

/**
 * Updates a specific movie from database
 * @param {UpdateMovie} args.movie new movie object to be added  
 */
export async function update_movie(_: any, args: { movie: UpdateMovie }, ctx: any) {
    authorize(ctx)
    const newmovie = args.movie

    try {
        const curmovie = await prisma.movies.findUnique({ where: { id: newmovie.movieId } })
        const { movieId, ...data } = Object.assign({}, curmovie, newmovie)
        await prisma.movies.update({ where: { id: movieId }, data })
        return "Movie updated successfully"
    } catch (error) {
        console.log(error)
    }
}


interface AddMovie {
    userId: number
    name: string
    director: string
    release: number
    image: string
    description: string
    type: string
    rating: number
    casts: string
}

interface UpdateMovie {
    movieId: number
    name?: string
    director?: string
    release?: number
    image?: string
    description?: string
    type?: string
    rating?: number
    casts?: string
}