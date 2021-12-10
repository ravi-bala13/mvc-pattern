const express = require("express");

const router = express.Router();

const Student = require("../models/student.model");

router.post("/", async (req, res) => {
    try {
        const student = await Student.create(req.body);

        return res.status(200).send(student)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

router.get("/", async (req, res) => {
    try {
        const student = await Student.find().populate({
            path: "evaluation_id",
            populate: {
                path: "topic_name",
                select: "topic_name"
            },
            // populate: {
            //     path: "instructor",
            //     select: "first_name"
            // }
        }).populate("user_id", "first_name").lean().exec();

        return res.status(200).send(student)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

// fetch all students who gave a particular evaluation
// router.get("/:evaluation", async (req, res) => {
//     try {
//         const ans = []
        
//         const student = await Student.find().populate({
//             path: "evaluation_id",
//             populate: {
//                 path: "topic_name",
//                 select: "topic_name"
//             }
//         }).populate("user_id", "first_name").lean().exec();

//         student.forEach( (each_stu) => {
//             // console.log('each_stu:', each_stu.evaluation_id.topic_name)
//             let tem = each_stu.evaluation_id.topic_name;
//             // console.log(tem.topic_name)
//             if(tem.topic_name == req.params.evaluation){
//                 ans.push(student)
//             }

//         } )

//         return res.status(200).send(ans)
//     } catch (e) {
//         return res.status(500).json({message: e.message, status:"Failed"})
        
//     }
// })

// fetch the student with his personal details who scored the highest mark in the evaluation

router.get("/marks", async (req, res) => {
    
    try {
        const student = await Student.find({}).sort({"mark": -1}).limit(1).lean().exec();
        // console.log('student:', student)

        return res.status(200).send(student)
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})
        
    }
})

module.exports = router;