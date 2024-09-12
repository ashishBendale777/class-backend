const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 6,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
        minlength: 8
    },
})

module.exports = mongoose.model("User", userSchema);