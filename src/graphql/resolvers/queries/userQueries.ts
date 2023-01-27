import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function get_users(_: any, args: { limit: number }) {
    const limit = args.limit
    const res = await prisma.users.findMany({ take: limit })
    console.log(res)
    return res
}





