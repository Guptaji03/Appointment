const Slot = require("../Models/slotModel")
const router = require("express").Router()


router.get("/", async (req, res) => {
    var q = {}
    if (req.query.doctor) {
        q["doctor"] = req.query.doctor
    }
    try {
        const slots = await Slot.find(q).populate("doctor").lean().exec()
        res.send(slots)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const slot = await Slot.findById(req.params.id).populate("doctor")
        res.send(slot)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.post("/", async (req, res) => {
    try {
        const slot = await Slot.create(req.body)
        res.send(slot)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const slot = await Slot.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(slot)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const slot = await Slot.findByIdAndDelete(req.params.id)
        res.send(slot)
    }
    catch (err) {
        res.send({ error: "error occured" })
    }
})

module.exports = router