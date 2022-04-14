const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    clinic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clinic",
        require: true
    },
    name: {
        type: String,
        require: true
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    degree: {
        type: String
    },
    speciality: {
        type: String
    },
    language: {
        type: String
    },
    experience: {
        type: String
    },
    fee: {
        type: Number,
        require: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("doctor", doctorSchema)