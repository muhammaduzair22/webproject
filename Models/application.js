const mongoose = require("mongoose")
var bcrypt = require("bcrypt");
const ApplicationSchema = mongoose.Schema({
    // applicant: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    // status: {
    //     type: String,
    //     default: 'pending'
    // },
    resume: {
        type: String,
    }

},
    { timestamps: true }
);


const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;