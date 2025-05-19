const { url } = require("inspector")
const mongoose = require("mongoose")
const { stringify } = require("querystring")

const bikeSchema = new mongoose.Schema({
    bikeName:{
        type:String,
        required:true
    },
    bikePrice:{
        type:String,
        required:true
    },
    bikeImg:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("MYBIKE",bikeSchema)