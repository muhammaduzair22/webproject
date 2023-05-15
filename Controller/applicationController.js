const Application = require("../Models/application");
const jwt = require("jsonwebtoken")

let addapplication = (req, res) => {
    let { status } = req.body;
    console.log(req.user)
    const applicant = req.user.id;
    console.log(author);
    let application = new Application({
        // applicant,
        // status,
        resume: req.file.filename
    });
    application.save().then((application) => {
        res.status(200).send({ "Message": "Application successfully created", application: application })
    }).catch((err) => {
        res.status(500).send({ "Message": "There was some Error", err: err })
    })
}
let getAllApplications = (req, res) => {
    Application.find()
        .then((Application) => {
            res.status(200).send(Application);
        })
        .catch((err) => {
            res.status(500).send({ Message: "There was some Error", err: err });
        });
};

const updateApplication = async (req, res) => {
    const _id = req.params.id;

    try {
        const Application = await Application.findOne({ _id });

        if (!Application) {
            return res.status(404).send("Not found");
        }

        const updates = Object.keys(req.body);
        updates.forEach((update) => (Application[update] = req.body[update]));

        await Application.save();

        res.send(Application);
    } catch (e) {
        res.status(400).send(e);
    }
};
let deleteApplication = (req, res) => {
    let id = (req.params.id)
    Application.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send("Delete Successfull");
        })
        .catch((err) => {
            res.status(500).send("Failed");
        });
};

module.exports = {
    addapplication,
    getAllApplications,
    updateApplication,
    deleteApplication
}