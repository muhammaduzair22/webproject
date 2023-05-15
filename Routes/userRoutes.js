
const { signup } = require("../Controller/userController");
const { login } = require("../Controller/loginController")
const { UploadImage } = require('../util');

const jwt = require("jsonwebtoken")
const userRoter = require("express").Router();


userRoter.post("/signup", signup)
userRoter.post('/login', login)
// articleRouter.post("/updateArticle:id", verifyToken, checkadmin, updateArticle)

let verifyToken = (req, res, next) => {
    let token = req.headers['token']
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (!err) {
            req.decoded = decoded
            next()
        }
        else {
            res.status(400).send({ "Message": "You are not Authorized" })
        }
    })
}
let checkadmin = (req, res, next) => {
    if (req.decoded.role === 'admin') {
        next()
    }
    else {
        res.status(400).send({ "Message": "You are not Authorized" })
    }
}
userRoter.get('/', verifyToken, checkadmin, (req, res) => {
    res.send({ "Message": "You have viewed top secret route" })
})

module.exports = userRoter;



