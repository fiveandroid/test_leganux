const ClassRoom = require("../models/classroom.model")
const createError = require('http-errors')


const getAll = () => {
  const ClassRooms = ClassRoom.find({})
  return ClassRooms
}

const getById = (id) => {
  const OneClassRoom = ClassRoom.findById(id)

  if(!OneClassRoom) {
    const error = createError(404, "Salon no encontrado")
    throw error
  }

  return OneClassRoom
}

const create = ( classRoomData ) => {
  const OneClassRoom = ClassRoom.create(classRoomData)
  return OneClassRoom
}

const update = (id, classRoomData) => {
  
  const OneClassRoom = ClassRoom.findByIdAndUpdate(id, classRoomData, { returnDocument: 'after' })
  return OneClassRoom
}

const remove = (id) => {
  const OneClassRoom = ClassRoom.findByIdAndDelete(id)
  return OneClassRoom
}
module.exports = { getAll, getById, create, update, remove }


