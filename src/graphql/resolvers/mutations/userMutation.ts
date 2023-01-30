import { PrismaClient } from "@prisma/client";
import moment from "moment"
import { isInvalid } from "../../../helpers/validate"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase/firebaseConfig";


const prisma = new PrismaClient()

/**
 * Adds a user to the database
 * @param {CreateUser} args.user user object to be added in the database 
 */
export async function create_user(_: any, args: { user: CreateUser }) {
    const invalid = isInvalid(args.user.email, args.user.password)
    if (invalid) return invalid

    const createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newuser = { ...args.user, createdAt }

    try {
        const emailExists = await prisma.users.findUnique({ where: { email: newuser.email } })
        if (emailExists) return "User with same email exists already"
        const auth = getAuth(app)
        await createUserWithEmailAndPassword(auth, newuser.email, newuser.password)
        await prisma.users.create({ data: newuser })
        return "User created successfully"
    } catch (error) {
        console.log(error)
    }
}

/**
 * Updates one user by id from database 
 * @param {UpdateUser} args.user new user object to be replaced in database 
 */
export async function update_user(_: any, args: { user: UpdateUser }) {
    const newuser = args.user
    const curuser = await prisma.users.findUnique({ where: { id: newuser.userId } })
    const { userId, ...data } = Object.assign({}, curuser, newuser)

    try {
        await prisma.users.update({ where: { id: userId }, data })
        return "User updated successfully"
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

interface UpdateUser {
    userId: number
    name?: string
    country?: string
}