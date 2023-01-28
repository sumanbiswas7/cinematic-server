import { PrismaClient } from "@prisma/client";
import moment from "moment"
import { isInvalid } from "../../../helpers/validate"

const prisma = new PrismaClient()

/**
 * Adds a user to the database
 * @param {User} args.user user object to be added in the database 
 */
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


export async function send_request(_: any, args: { request: Notification }) {
    const data = args.request
    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newdata = { ...data, createdAt }

    try {
        await prisma.notifications.create({ data: newdata })
        return "request sent successfuly"

    } catch (error) {
        console.log(error)
    }

}

export async function send_suggestion() { }


interface CreateUser {
    name: string
    email: string
    password: string
    country?: string
    createdAt: string
}

interface Notification {
    request: boolean
    suggestion: boolean
    from: string
    userId: number
}
