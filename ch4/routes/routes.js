//Creo las variables que luego seran llamadas 
const express = require("express");
const router = express.Router();

//Las siguientes variables funcionan para que ambas tablas esten conectadas
const userRoutes = require("./routes/userRoutes");
const companyRoutes = require("./routes/companyRoutes");

router.use("/", userRoutes);
router.use("/", companyRoutes);

module.exports.router;
