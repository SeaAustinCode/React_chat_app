const mongoose = require("mongoose");

const messageModel = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    content: {
        type: String,
        required: [true, "Message must be present and have contents"],
        trim: true // this removes whitespaces so that it is saved in the DB properly "  hello  " becomes "hello" in the DB 
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId, ref: "Chat"
    },
    // readBy: [{
    //     type: mongoose.Schema.Types.ObjectId, ref: "User"
    // }],
},
    { timestamps: true }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;