require('dotenv').config()
const server = require('./src/server');
const mongoose = require('mongoose')
 
// parametros .ENV
const  {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

// Conexion a la BD
mongoose.connect( `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then( () =>{
    console.log("** Se conecto a la bd")

    //Levanta el servidor
    server.listen(8081,()=>{

        console.log("** Servicio Activo en puerto 8081 ")

    })

}).catch( (err) =>{
    console.log("No se pudo conectar a la bd", err )
})
