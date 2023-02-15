export async function authContext({ req }) {
    return { authToken: req.headers.authorization }
}

interface Req {

}