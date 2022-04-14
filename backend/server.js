const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const clinicController = require("./Controllers/clinicController")
const doctorController = require("./Controllers/doctorController")
const slotController = require("./Controllers/slotController")

dotenv.config({ path: "./.env" })
const app = express()

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("mongodb connected"))

app.use(cors())
app.use(express.json())

app.use("/clinic", clinicController)
app.use("/doctor", doctorController)
app.use("/slot", slotController)


app.listen(process.env.PORT, console.log("connected"))