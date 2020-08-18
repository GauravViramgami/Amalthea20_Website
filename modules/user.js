var mongoose = require("mongoose")
    // findOrCreate = require('mongoose-findorcreate')

var userSchema = new mongoose.Schema({
    email : String,
    googleId : String,
    google: Object,
    name: String,
    username: String,
})

// userSchema.plugin(findOrCreate);

module.exports = mongoose.model("user",userSchema)