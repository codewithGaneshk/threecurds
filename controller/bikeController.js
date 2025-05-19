const Bike = require("../model/bike")

exports.getBike = async (req,res) => {
    try {
        const data = await Bike.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.postBike = async (req,res) => {
    try {
        const data = await Bike.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.putBike = async (req,res) => {
    try {
        const data = await Bike.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteBike = async (req,res) => {
    try {
        const data = await Bike.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,mesage:error.message})
    }
}