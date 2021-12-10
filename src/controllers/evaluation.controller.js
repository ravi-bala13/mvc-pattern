const express = require("express");

const router = express.Router();

const Evaluation = require("../models/evaluation.model");

router.post("/", async (req, res) => {
    try {
        const evaluation = await Evaluation.create(req.body);

        return res.status(200).send(evaluation)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
});

router.get("/", async (req, res) => {
    try {
        const evaluation = await Evaluation.find().populate("instructor", "first_name").populate("topic_name", "topic_name").lean().exec();

        return res.status(200).send(evaluation)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

module.exports = router;