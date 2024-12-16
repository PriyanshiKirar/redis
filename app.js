const express = require("express");
const app = express();
const axios = require('axios');
const Redis=require("ioredis");
app.get("/", function (req, res) {
    res.send('app is working ');
})


app.get("/create-ride", async (req, res) => {
    try {
        console.log("Requesting distance from map server...");
        const result = await axios.get("http://localhost:3001/distance");
        console.log("Received response:", result.data);
        res.send(result.data);
    } catch (error) {
        console.error("Error fetching distance:", error.message);
        res.status(500).send("Failed to fetch of distance");
    }
});


app.listen(3000, () => {
    console.log("Server is working on port 3000");
})