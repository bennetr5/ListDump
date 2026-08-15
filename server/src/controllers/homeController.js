export function redirectHome(req,res) {
    res.redirect("/home");
}

export function home(req,res) {
    res.send("hi from home");
}