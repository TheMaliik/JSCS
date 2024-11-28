const mongoose = require('mongoose');




const USER = mongoose.Schema({
Name:String,
Email:String,
Password:String,

});

module.exports = mongoose.model("user",USER);