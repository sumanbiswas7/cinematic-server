import { PrismaClient } from "@prisma/client";
import { authorize } from "../../../helpers/authorization";

const prisma = new PrismaClient()

/**
 * Retrieves user from database
 * @param {Number} args.limit number of users to be retrieved 
 */
export async function get_users(_: any, args: { limit: number }, ctx: any) {
    authorize(ctx)
    const limit = args.limit
    return await prisma.users.findMany({ take: limit })
}

/**
 * Retrieves single user from database
 * @param {Number} args.id userId to be retrieved
 */
export async function get_user(_: any, args: { id: number }, ctx: any) {
    authorize(ctx)
    const id = args.id
    return await prisma.users.findUnique({ where: { id }, include: { movies: true } })
}

/**
 * Retrieves single user from database
 * @param {String} args.email userEmail to be retrieved
 */
export async function get_authuser(_: any, args: { email: string }, ctx: any) {
    authorize(ctx)
    const email = args.email
    return await prisma.users.findUnique({ where: { email }, include: { notifications: true, movies: true } })
}

/**
 * Retrieves array of users from database
 * @param {Number} args.text search text
 */
export async function search_user(_: any, args: { text: string }, ctx: any) {
    authorize(ctx)
    const text = args.text
    return await prisma.users.findMany({ where: { name: { contains: text } } })
}