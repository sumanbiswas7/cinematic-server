import { PrismaClient } from "@prisma/client";
import moment from "moment"
import { isInvalid } from "../../../helpers/validate"

const prisma = new PrismaClient()

export async function create_user(_: any, args: { user: CreateUser }) {
    const invalid = isInvalid(args.user.email, args.user.password)
    if (invalid) return invalid

    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newuser = { ...args.user, createdAt }

    try {
        await prisma.users.create({ data: newuser })
        return "User created successfully"
    } catch (error) {
        console.log(error)
    }
}


interface CreateUser {
    name: string
    email: string
    password: string
    country?: string
    createdAt: string
}

