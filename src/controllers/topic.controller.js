const express = require("express");

const router = express.Router();

const Topic = require("../models/topic.model");

router.post("/", async (req, res) => {
    try {
        const topic = await Topic.create(req.body);

        return res.status(200).send(topic)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

router.get("/", async (req, res) => {
    try {
        const topic = await Topic.find().lean().exec();

        return res.status(200).send(topic)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

module.exports = router;