
const express = require("express")
const cors = require("cors")
const routerStudent = require("./routes/student.route")
const routerClassRoom = require("./routes/classroom.route")



const app = express();


// Middleware
app.use(cors())
app.use(express.json())

// Middleware de ruta
app.use("/student", routerStudent)
app.use("/classroom", routerClassRoom)


app.get("/", (request, response) => {
    response.json({
      message: "Endpoint de Home, Bienvenido a nuestra API de TEST LEGANUX"
    })
  })


module.exports = app