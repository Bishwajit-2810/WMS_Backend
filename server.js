const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect(process.env.mongoUrl, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ MongoDB connection error:"));
db.once("open", () => console.log("✅ Connected to MongoDB"));

// Define Data Schema
const dataSchema = new mongoose.Schema({
    T: Number,  // Temperature
    D: Number,  // TDS
    U: Number,  // Turbidity
    P: Number,  // pH
    F: Number,  // Flow Rate
    L: Number,  // Total Water
    M: Number,  // Timestamp
    timestamp: { type: Date, default: Date.now },
});

const LoRaData = mongoose.model("LoRaData", dataSchema);

app.use(bodyParser.json());

// API Endpoint to receive LoRa data
app.post("/api/data", async (req, res) => {
    try {
        const newData = new LoRaData(req.body);
        await newData.save();
        console.log("✅ Data saved:", req.body);
        res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
        console.error("❌ Error saving data:", error);
        res.status(500).json({ error: "Failed to save data" });
    }
});

// API Endpoint to fetch all data
app.get("/api/data", async (req, res) => {
    try {
        const allData = await LoRaData.find().sort({ timestamp: -1 }).limit(10);
        res.status(200).json(allData);
    } catch (error) {
        console.error("❌ Error fetching data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
