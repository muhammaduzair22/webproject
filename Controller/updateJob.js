const jwt = require("jsonwebtoken");
const Job = require("../Models/Job");

const updateJob = async (req, res) => {
  const _id = req.params.id;

  try {
    const job = await Job.findOne({ _id });

    if (!job) {
      return res.status(404).send("Not found");
    }

    const updates = Object.keys(req.body);
    updates.forEach((update) => (job[update] = req.body[update]));

    await job.save();

    res.send(job);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { updateJob };
