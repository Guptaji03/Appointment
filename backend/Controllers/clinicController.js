const Clinic = require("../Models/clinicModel")

const router = require("express").Router()


router.get("/", async (req, res) => {
    try {
        const clinics = await Clinic.find().lean().exec()
        res.send(clinics)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.params.id)
        res.send(clinic)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.post("/", async (req, res) => {
    try {
        const clinic = await Clinic.create(req.body)
        res.send(clinic)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const clinic = await Clinic.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(clinic)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const clinic = await Clinic.findByIdAndDelete(req.params.id)
        res.send(clinic)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

module.exports = router