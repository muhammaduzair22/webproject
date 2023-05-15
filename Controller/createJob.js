const jwt = require("jsonwebtoken");
const Job = require("../Models/Job");

let createJob = (req, res) => {
    let { title, body, author, published, tags } = req.body;

    let job = new Job({
        title,
        body,
        author,
        published,
        tags
    });
    job.save().then((job) => {
        res.status(200).send({ "Message": "new job successfully created", job: job })
    }).catch((err) => {
        res.status(500).send({ "Message": "There was some Error", err: err })
    })
}

module.exports = {
    createJob
}