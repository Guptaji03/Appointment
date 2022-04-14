const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const clinicController = require("./Controllers/clinicController")
const doctorController = require("./Controllers/doctorController")
const slotController = require("./Controllers/slotController")

const app = express()

mongoose.connect("mongodb+srv://ritesh:ritesh_123@cluster0.xrcit.mongodb.net/doctor?retryWrites=true&w=majority").then(() => console.log("mongodb connected"))

dotenv.config({ path: "./.env" })
app.use(cors())
app.use(express.json())

app.use("/clinic", clinicController)
app.use("/doctor", doctorController)
app.use("/slot", slotController)


app.listen(process.env.PORT, console.log("connected"))