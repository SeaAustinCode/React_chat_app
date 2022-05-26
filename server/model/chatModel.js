const mongoose = require("mongoose")

const chatModel = mongoose.Schema({
    chatName: {
        type: String,
        required: [true, "chatName is required"],
        trim: true //this removes whitespaces so that it is saved in the DB properly
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId, //this will contain the id to that particular user,
        ref: "User",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},
    { timestamps: true, }

);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;