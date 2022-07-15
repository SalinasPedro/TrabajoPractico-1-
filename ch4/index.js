const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.error(error);
});

database.once("connected", () => {
    console.log("Base de datos conectada.");
});

const app = express();
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`El servidor express se esta ejecutando en http://${process.env.HOST}:${process.env.PORT}/`);
});