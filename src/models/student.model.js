const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
      roll_id: { type: Number, required: true },
      current_batch: { type: Number, required: true },
      mark: { type: Number, required: true },
      evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
      },
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Student = mongoose.model("student", studentSchema); // students collection

  module.exports = Student;