const express = require ("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv/config")
const cors = require("cors")
const userRoute = require("./route/userRoute")
const bikeRoute = require("./route/bikeRoute")
const taskRoute = require("./route/taskRoute")



app.get("/", (req, res) => {
  res.send("3curds bike,task,user")
})

app.use(express.json())
app.use(cors())

app.use("/api/user",userRoute)
app.use("/api/bike",bikeRoute)
app.use("/api/task",taskRoute)


app.listen(process.env.PORT)

async function db() {
  try {
    const data = await mongoose.connect(process.env.DB)
    console.log(data.default.STATES.connected);

  } catch (error) {
    console.log(error.message);

  }
}
db()