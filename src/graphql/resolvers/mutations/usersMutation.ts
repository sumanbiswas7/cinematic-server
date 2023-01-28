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

/**
 * Sends friend request to a user
 * @param args.request request object  
 */
export async function send_request(_: any, args: { request: Notification }) {
    const data = args.request
    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newdata = { ...data, createdAt, suggestion: false, request: true }

    try {
        await prisma.notifications.create({ data: newdata })
        return "request sent successfuly"

    } catch (error) {
        console.log(error)
    }
}

/**
 * Sends movie suggestion to a user
 * @param args.request request object  
 */
export async function send_suggestion(_: any, args: { suggestion: Notification }) {
    const data = args.suggestion
    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newdata = { ...data, createdAt, suggestion: true, request: false }

    try {
        await prisma.notifications.create({ data: newdata })
        return "request sent successfuly"

    } catch (error) {
        console.log(error)
    }
}


/**
 * Deletes all notification of an user
 * @param args.userId user's id 
 */
export async function clear_notifications(_: any, args: { userId: number }) {
    const userId = args.userId

    try {
        await prisma.notifications.deleteMany({ where: { userId } })
        return "Notifications cleared successfuly"
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

interface Notification {
    request: boolean
    suggestion: boolean
    from: string
    userId: number
}
