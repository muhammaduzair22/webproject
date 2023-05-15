const jwt = require("jsonwebtoken");
const Job = require("../Models/Job");

let deleteJob = (req, res) => {
  let id = (req.params.id)
  Job.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Delete Successfull");
    })
    .catch((err) => {
      res.status(500).send("Failed");
    });
};

module.exports = { deleteJob };
