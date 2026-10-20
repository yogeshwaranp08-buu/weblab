
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 3000;

const uri = "mongodb+srv://@demo.guun7st.mongodb.net/";
const client = new MongoClient(uri);

app.use(express.json());
app.use(express.static("public"));

async function startServer() {
    await client.connect();

    const db = client.db("BusDB");
    const buses = db.collection("buses");

    // CREATE - Add bus
    app.post("/buses", async (req, res) => {
        const result = await buses.insertOne(req.body);
        res.json({ message: "Bus added successfully!" });
    });

    // READ - Display buses
    app.get("/buses", async (req, res) => {
        const data = await buses.find().toArray();
        res.json(data);
    });

    // UPDATE - Edit bus
    app.put("/buses/:id", async (req, res) => {
        await buses.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        res.json({ message: "Bus updated successfully!" });
    });

    // DELETE - Remove bus
    app.delete("/buses/:id", async (req, res) => {
        await buses.deleteOne({
            _id: new ObjectId(req.params.id)
        });
        res.json({ message: "Bus deleted successfully!" });
    });

    app.listen(PORT, () => {
        console.log("Server running at http://localhost:3000");
    });
}

startServer().catch(console.error);
