const { createJob } = require("../Controller/createJob")
const { deleteJob } = require("../Controller/deleteJob")
const { updateJob } = require("../Controller/updateJob")
const { getAllJobs } = require("../Controller/getJob")
const { getUnpublishedJobs } = require("../Controller/getJob")

// const { login } = require("../Controller/loginController")
const jwt = require("jsonwebtoken")
const articleRouter = require("express").Router();

articleRouter.get("/", (req, res) => {
    console.log("HERE")
    res.send("Hello")
})


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

articleRouter.post("/createJob", createJob)
articleRouter.delete("/deleteJob:id", verifyToken, checkadmin, deleteJob)
articleRouter.post("/updateJob:id", verifyToken, checkadmin, updateJob)
articleRouter.get("/getAllJobs", getAllJobs)
articleRouter.get("/getUnpublishedJobs", getUnpublishedJobs)



module.exports = articleRouter;



