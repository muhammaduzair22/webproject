const jwt = require("jsonwebtoken");
const Job = require("../Models/Job");

let getAllJobs = (req, res) => {
  Job.find()
    .then((job) => {
      res.status(200).send(job);
    })
    .catch((err) => {
      res.status(500).send({ Message: "There was some Error", err: err });
    });
};
let getUnpublishedJobs = (req, res) => {
  let unpublishedArticles = [];
  Job.find()
    .then((jobs) => {
      jobs.map((a) => {
        if (!a.published) unpublishedArticles.push(a);
      });
      res.status(200).send(unpublishedArticles);
    })
    .catch((err) => {
      res.status(500).send({ Message: "There was some Error", err: err });
    });
};

module.exports = {
  getAllJobs,
  getUnpublishedJobs,
};
