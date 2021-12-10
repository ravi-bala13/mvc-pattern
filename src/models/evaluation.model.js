const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
    {
      Date_of_eval: { type: Date, required: true },
      instructor:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true
      },
      topic_name:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "topic",
        required: true
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
const Evaluation = mongoose.model("evaluation", evaluationSchema); // evaluations collection

module.exports = Evaluation;