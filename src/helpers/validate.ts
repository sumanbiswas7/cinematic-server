const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


/**
 * Returns false if user is valid and a message if invalid
 * @param {User} user email and password object of the user 
 */
const isInvalid = (email: string, password: string) => {
    if (!email?.match(emailReg)) return "Provide a valid email"
    if (password.length < 4) return "Password must be atleast 4 chars long"
    return false
}


export { isInvalid }