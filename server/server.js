const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");
const { chats } = require("./data/dummydata")

const app = express();
dotenv.config();
// const DB = "messaging_app_schema"; // right now just using 1 DB for the messages - may need another for uses?

app.get("/", (req, res) => {
    res.send("API is Running");
    console.log(chats)
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server Started on Port ${PORT}`))
// const io = require('socket.io')(server, { cors: true }); // initialize the socket by invoking the socket.io library and pass it our Express server

// // ===== middleware ======
// app.use(cors(), express.json(), express.urlencoded({extended:true}))
// // =======================
// // console.log("hello")

// // ====== DATABASE CONNECTION 
// require("./config/mongoose.config")(DB)

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// // connect the routes 
// // require("./routes/routes")(app)

// io.on("connection", socket => {
//     //NOTE: Each client that connects gets their own socket id!
//     socket.on("event_from_client", data =>{
//         //socket.broadcast will emit to all other clients besides
//         //the client who is actually emitting
//         socket.broadcast.emit("send_data_to_all_other_clients", data);
//     });
//     console.log(socket.id);
//     // if this is logged in our node terminal, that means a new client has 
//     // successfully completed the handshake!

//     //We add all of our additional event listeners right inside this function. 
//     //NOTE: "connection" is a BUILT IN event listener
// });

// // io.emit -- emits an event to all connected clients 
// // socket.broadcast.emit -- emits an event to ***all clients other than this particular one***, referenced by the socket variable
// // socket.emit emits an event directly to **this specific client**


// // start the server 

