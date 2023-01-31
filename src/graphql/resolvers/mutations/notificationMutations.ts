import { PrismaClient } from "@prisma/client";
import moment from "moment"

const prisma = new PrismaClient()

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
        return "request sent successfully"
    } catch (error) {
        console.log(error)
    }
}

/**
 * Accepts friend request from a user
 * @param args.request request object  
 */
export async function accept_request(_: any, args: { request: AcceptReqProps }) {
    const userId = args.request?.userId
    const from = args.request?.from

    try {
        const user = await prisma.users.findUnique({ where: { id: userId } })
        const friends = { friends: [...user.friends, from] }
        const newuser = Object.assign({}, user, friends)
        await prisma.users.update({ where: { id: userId }, data: newuser })
        return `Friend request from ${from} accepted successfully`
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
        return "request sent successfully"
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
        return "Notifications cleared successfully"
    } catch (error) {
        console.log(error)
    }
}



interface Notification {
    request: boolean
    suggestion: boolean
    from: string
    userId: number
}

interface AcceptReqProps {
    userId: number
    from: string
}