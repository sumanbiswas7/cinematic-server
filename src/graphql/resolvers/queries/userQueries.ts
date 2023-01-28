import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/**
 * Retrieves user from database
 * @param {Number} args.limit number of users to be retrieved 
 */
export async function get_users(_: any, args: { limit: number }) {
    const limit = args.limit
    return await prisma.users.findMany({ take: limit })
}

/**
 * Retrieves single user from database
 * @param {Number} args.id userId to be retrieved
 */
export async function get_user(_: any, args: { id: number }) {
    const id = args.id
    return await prisma.users.findUnique({ where: { id }, include: { notifications: true, movies: true } })
}

