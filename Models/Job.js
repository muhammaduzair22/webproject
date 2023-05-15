const mongoose = require("mongoose")
var bcrypt = require("bcrypt");
const JobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        max: 30,
        min: 3
    },
    body: {
        type: String,
        required: true,

    },
    author: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        default: 'false'
    },
    tags: {
        type: [String],
    }

},
    { timestamps: true }
);




const Job = mongoose.model('Article', JobSchema);

module.exports = Job;