//Creo la constante "mongoose" para poder crear un esquema de la BD
const mongoose = require("mongoose");

//Se crean los atributos correspondiente a la BD, en este caso la tabla "User"
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },  
  company:{
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
