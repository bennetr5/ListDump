export function redirectLogin(req, res) {
    res.redirect('/login')
}

export function login(req, res) {
    res.send("hi from login")
}