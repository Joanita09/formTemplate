//Dependencies
const mongoose = require('mongoose');

var covidSchema = new mongoose.Schema({
    surname:String,
    first_name:String,
    dob:Date,
    residence:String,
    occupation:String,
    nationality:String,
    gender:String,
    category:String

})

module.exports = mongoose.model('Covid', covidSchema)