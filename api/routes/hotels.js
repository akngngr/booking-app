import express from 'express';
import Hotel from '../models/Hotel.js';

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
    
    const newHotel = new Hotel(req.body);
    
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch (err) {
        res.status(500).json(err);
    }
});
//UPDATE
router.put("/:id", async (req, res) => {
    
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body },
    { new: true }
    );
    
    try {
        res.status(200).json(updatedHotel);
    }catch (err) {
        res.status(500).json(err);
    }
});
//DELETE
router.delete("/:id", async (req, res) => {
    
    await Hotel.findByIdAndDelete(
        req.params.id
    );
    try {
        res.status(200).json("Hotel has been deleted");
    }catch (err) {
        res.status(500).json(err);
    }
});
//GET
router.get("/:id", async (req, res) => {
    
    const hotel = await Hotel.findById(
        req.params.id
    );
    
    try {
        res.status(200).json(hotel);
    }catch (err) {
        res.status(500).json(err);
    }
});
//GET ALL
router.get("/", async (req, res) => {
    
    const hotels = await Hotel.find(
        req.params.id
    );
    
    try {
        res.status(200).json(hotels);
    }catch (err) {
        res.status(500).json(err);
    }
});

export default router;
