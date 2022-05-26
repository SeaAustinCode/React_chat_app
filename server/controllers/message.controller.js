// // CONTROLLER = CRUD 
// // MAKING QUERIES TO THE DB 
// // USING THE MODEL 

// const {Message} = require("../model/message.model") //import the model
// const { chats } = require("../data/dummydata")

// module.exports = {

//     // ======== CREATE ===========
//     create: (req, res) => {
//         // we are passing in body data which is an object
//         console.log(req.body) // if this is undefined check middleware 
//         Message.create(req.body)
//             .then(newMessage => {
//                 console.log("DB successfully created a new Message");
//                 return res.json(newMessage)
//             })
//             .catch(err => {
//                 console.log("DB ERROR CREATED Message")
//                 return res.status(400).json(err)
//             })
//     },


//     // ======== READ ONE ===========
//     findOne: (req, res) => {
//         console.log(req.params);
//         // Note.findOne({_id : req.params.id}) <---- this is how the platform shows it 
//         Message.findById(req.params.id)
//             .then(chat => res.json(chat))
//             .catch(err => res.json(err))
//     },


//     // ======== READ ALL ===========
//     findAll: (req, res) => {
//         Message.find()
//             .then((messages) => {
//                 console.log(messages);
//                 // if we return the object it will be an array 
//                 return res.json(messages)
//             })
//             .catch(err => res.json(err))
//     },


//     // ======== UPDATE ===========
//     update: (req, res) => {
//         console.log("UPDATE: ", req.params.id);
//         Message.findByIdAndUpdate(req.params.id, req.body, {
//             new: true, runValidators: true
//         })
//             .then(updatedMessage => res.json(updatedMessage))
//             .catch(err => {
//                 console.log("DB ERROR CREATED Message")
//                 return res.status(400).json(err)
//             })
//     },


//     // ======== DELETE ===========
//     delete: (req, res) => {
//         console.log(req.params.id);
//         Message.findByIdAndDelete(req.params.id)
//             .then(result => res.json(result))
//             .catch(err => res.json(err))
//     }

// }