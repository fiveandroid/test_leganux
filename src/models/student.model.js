const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  age: {
    type: Number
  }, 
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("student", studentSchema);
