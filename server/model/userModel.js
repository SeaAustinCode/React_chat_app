const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String, 
        required: true,
        default: "https://miro.medium.com/max/1400/1*N5w9Ay0VlQBKF4b11C0LdQ.png"
    },
},
    { timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;