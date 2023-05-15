const mongoose = require("mongoose")
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
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);


const User = mongoose.model('User', UserSchema);

module.exports = User;