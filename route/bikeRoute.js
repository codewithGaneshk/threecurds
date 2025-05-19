
const {getBike,postBike,putBike,deleteBike} = require("../controller/bikeController")
const route = require("express").Router()

route.get("/",getBike)
route.post("/",postBike)
route.put("/:id",putBike)
route.delete("/:id",deleteBike)

module.exports = route