const {getUser,postUser,putUser,deleteUser}  =  require ("../controller/usercontroller")
const route = require("express").Router()

route.get("/",getUser)
route.post("/",postUser)
route.put("/:id",putUser)
route.delete("/:id",deleteUser)

module.exports = route