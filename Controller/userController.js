const User = require("../Models/User");
const jwt = require("jsonwebtoken")

let signup = (req, res) => {
    let { username, password, name, role } = req.body;

    let user = new User({
        username,
        password,
        name,
        role,
        // resume: req.file.filename
    });
    user.save().then((user) => {
        res.status(200).send({ "Message": "User successfully created", user: user })
    }).catch((err) => {
        res.status(500).send({ "Message": "There was some Error", err: err })
    })
}

module.exports = {
    signup
}