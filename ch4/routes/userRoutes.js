//Creo las variables que luego seran llamadas 
const express = require("express");
const Model = require("../models/userModel");
const router = express.Router();

//Metodo Get
router.get("/users", async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método GET por id
 router.get("/users/:id", async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método POST 
router.post("/users", async (req, res) => {
    const data = new Model({
        name: req.body.name,
        userame: req.body.userame,
        email: req.body.email
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//Metodo PUT
router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new : true };
        const data = await Model.findByIdAndUpdate(
            id, 
            updatedData, 
            options
        );
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Método DELETE 
router.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
 
module.exports = router;
