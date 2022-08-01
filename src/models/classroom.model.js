const mongoose = require("mongoose")

const classRoomSchema = new mongoose.Schema({
  class: {
    type: String,
    minlength: 3,
    required: true,
  },
  order: {
    type: Number
  },
  numberOfStudents: {
    type: Number   
  },
  active: {
    type: Boolean,
    required: true,
  },
  students: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("classroom", classRoomSchema);
