const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
      
    }
},{timestamps:true})

module.exports = mongoose.model("task",taskSchema)