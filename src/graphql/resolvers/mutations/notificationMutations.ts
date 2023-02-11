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
        const req = await prisma.notifications.findMany({ where: { request: true, from: data.from } })
        if (req.length) return "Request already exists"
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
    const from = args.request?.from
    const userId = args.request?.userId // Getting the To's Id
    const fromId = parseInt(from.split("#")[1]) // Getting the sender's Id 

    try {
        const user = await prisma.users.findUnique({ where: { id: userId } })
        if (user.friends.includes(from)) return `${from} friend exists in user ${userId}`
        const friends = { friends: [...user.friends, from] }
        const newuser = Object.assign({}, user, friends)

        const from2 = `${user.name}#${userId}`
        const user2 = await prisma.users.findUnique({ where: { id: fromId } })
        if (user2.friends.includes(from2)) return `${from2} friend exists in user ${fromId}`
        const friends2 = { friends: [...user2.friends, from2] }
        const newuser2 = Object.assign({}, user2, friends2)

        await prisma.users.update({ where: { id: userId }, data: newuser })
        await prisma.users.update({ where: { id: fromId }, data: newuser2 })

        return `Users ${userId} and ${fromId} are now friends`
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

/**
 * Deletes a single notification from notification table
 * @param args.notId notification id 
 */
export async function delete_notification(_: any, args: { notId: number }) {
    const notId = args.notId

    try {
        await prisma.notifications.delete({ where: { id: notId } })
        return "Notification deleted successfully"
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