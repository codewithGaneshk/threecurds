const {getTask,postTask,putTask,deleteTask} = require ("../controller/taskController")
const route = require("express").Router()

route.get("/",getTask)
route.post("/",postTask)
route.put("/:id",putTask)
route.delete("/:id",deleteTask)


module.exports = route