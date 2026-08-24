export function login(req, res) {
    console.log(req.body.username)
    console.log(req.body.password)

    if (req.body.username === 'admin' && req.body.password === '1234') {
        res.json({ success: true })
    }
    else {
        res.json({success: false})
    }
}