const mongoose = require("mongoose");

module.exports = (DB) => {
mongoose.connect(`mongodb://localhost/${DB}`, {
})

    .then(()=>console.log("Database connection established with Mongoose"))
    .catch(err=>console.log("There was an error connecting to the database -- via mongoose", err));

}