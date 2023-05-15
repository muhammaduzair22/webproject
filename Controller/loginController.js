const User = require("../Models/User");
const jwt = require("jsonwebtoken")

let login = (req, res) => {

    let { username, password } = req.body;
    User.findOne({ username: username }).then((foundUser) => {
        if (!foundUser) {
            res.status(404).send({ "Message": "User not found" })
        }
        else {
            if (foundUser.password === password) {
                let token = jwt.sign({
                    id: foundUser._id,
                    role: foundUser.role
                }, process.env.SECRET_KEY, {
                    expiresIn: '24h'
                })

                // let token = jwt.sign({ username: foundUser.username }, process.env.SECRET_KEY)
                res.status(200).send({ "Message": "User successfully logged in", User: foundUser, token: token })
            }
            else {
                res.status(500).send({ "Message": "Wrong Password" })
            }
        }
    })
}

module.exports = { login }