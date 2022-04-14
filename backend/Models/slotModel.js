const mongoose = require("mongoose")

const slotSchema = mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor",
        require: true
    },
    client: {
        type: String,
        require: true
    },
    startTime: {
        type: String
    },
    isActive: {
        type: Boolean,
        default: false
    },
    mobile: {
        type: Number,
        max: 9999999999
    }
})

module.exports = mongoose.model("slot", slotSchema)