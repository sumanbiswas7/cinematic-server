import { PrismaClient } from "@prisma/client";
import moment from "moment"

const prisma = new PrismaClient()

export async function add_movie(_: any, args: { movie: AddMovie }) {
    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newmovie = args.movie
    
    try {
        await prisma.movies.create({ data: { ...newmovie, createdAt } })
        return "Movie added successfully"
    } catch (error) {
        console.log(error)
    }
}


interface AddMovie {
    name: string
    director: string
    release: number
    image: string
    description: string
    type: string
    rating: number
    casts: string
}