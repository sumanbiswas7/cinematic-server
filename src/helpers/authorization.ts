
export function authorize(context: any) {
    const key = context.headers?.apikey
    if (key != process.env.API_KEY) throw new Error("Unauthorized")
}

interface Context {
    headers: {
        apiKey?: string
    }
}