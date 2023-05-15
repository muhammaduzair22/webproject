const mongoose = require("mongoose")
var bcrypt = require("bcrypt");
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        max: 30,
        min: 3
    },
    password: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'user'
    },
    // resume: {
    //     type: String,
    // }

},
    { timestamps: true }
);


const User = mongoose.model('User', UserSchema);

module.exports = User;