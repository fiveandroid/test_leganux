
const express = require("express");
const app = require("../server");
const { getAll, getById, create, update, remove } = require("../usecases/classroom.usecase")

const router = express.Router()


router.get("/", async (request, response) => {
  try {
    const classRooms = await getAll(); 

    response.json({
      success: true,
      data: {
        classRooms
      }
    })
  }catch(err) {
    response.status(400)
    response.json({
      success: false,
      message: err.message
    })
  }
})

router.get("/:id", async (request, response) => {
  
  const { id } = request.params

  try {
    const classRoom = await getById(id)
    response.json({
      success: true,
      data: {
        classRoom
      }
    })
  } catch(error) {
    
    response.status(error.status || 500) // Not found
    response.json({
      success:false,
      message: error.message
    })
  }
})


router.post("/", async (request, response) => {
  
  try {
    const classRoom = await create(request.body)
    response.status(201)
    response.json({
      success: true,
      data: {
        classRoom
      }
    })

  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete("/:id", async (request, response) => {
  try {
    await remove(request.params.id)
    response.json({
      success: true,
      message: "classRoom was deleted..."
    })

  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch("/:id", async (request, response) => {
  try {
    const classRoom = await update(request.params.id, request.body)
    response.json({
      success: true,
      data: {
        classRoom
      }
    })

  } catch(error) {
    response.status(404)
    response.json({
      success: false,
      message: error.message
    })
  }
})


module.exports = router

