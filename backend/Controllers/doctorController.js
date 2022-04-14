const Doctor = require("../Models/doctorModel")

const router = require("express").Router()


router.get("/", async (req, res) => {
    var q = {}
    if (req.query.clinic) {
        q["clinic"] = req.query.clinic
    }
    try {
        const doctors = await Doctor.find(q).populate("clinic").lean().exec()
        res.send(doctors)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate("clinic")
        res.send(doctor)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.post("/", async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body)
        res.send(doctor)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(doctor)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id)
        res.send(doctor)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

module.exports = router