const mongoose = require("mongoose")

const clinicSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvr_NwgNPdxqohe2BCmOrUJaiZ2tsBgugUQ&usqp=CAU"
    },
    address: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("clinic", clinicSchema)