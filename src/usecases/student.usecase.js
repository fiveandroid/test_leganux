const Student = require("../models/student.model")
const createError = require('http-errors')


const getAll = () => {
  const Students = Student.find({})
  return Students
}

const getById = (id) => {
  const OneStudent = Student.findById(id)

  if(!OneStudent) {
    const error = createError(404, "Alumno no encontrado")
    throw error
  }

  return OneStudent
}

const create = ( studentData ) => {
  const OneStudent = Student.create(studentData)
  return OneStudent
}

const update = (id, studentData) => {
  
  const OneStudent = Student.findByIdAndUpdate(id, studentData, { returnDocument: 'after' })
  return OneStudent
}

const remove = (id) => {
  const OneStudent = Student.findByIdAndDelete(id)
  return OneStudent
}
module.exports = { getAll, getById, create, update, remove }


