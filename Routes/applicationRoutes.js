const { addapplication, getAllApplications, updateApplication, deleteApplication } = require("../Controller/applicationController")

const jwt = require("jsonwebtoken")
const applicationRouter = require("express").Router();
const { UploadImage } = require('../util');

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

applicationRouter.get("/", (req, res) => {
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

applicationRouter.post("/addapplication", upload.array("files"), uploadFiles)
applicationRouter.delete("/deleteJob:id", verifyToken, checkadmin, deleteApplication)
applicationRouter.post("/updateJob:id", verifyToken, checkadmin, updateApplication)
applicationRouter.get("/getAllApplications", getAllApplications)

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}

module.exports = applicationRouter;



