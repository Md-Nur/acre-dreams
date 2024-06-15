import express from "express";
import cors from "cors";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
// import estate from "./estate.json";
// const express = require("express");
// const estate = require("./estate.json");
// const cors = require("cors");

const uri =
  "mongodb+srv://Nur:Khelahobe@cluster0.ez7meam.mongodb.net/?retryWrites=true&w=majority";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = client.db("land-real-estate");

    await database.command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    app.get("/api/estates", async (req, res) => {
      const estates = await database.collection("estates").find().toArray();
      res.json(estates);
    });

    app.get("/api/estate/:id", async (req, res) => {
      const id = parseInt(req.params.id);
      const estate = await database.collection("estates").findOne({ id: id });
      res.json(estate);
    });

    app.post("/api/estate", async (req, res) => {
      const data = await req.body;
      const estates = await database.collection("estates").insertOne(data);
      res.json(estates);
    });

    app.put("/api/estate/:id", async (req, res) => {
      const id = parseInt(req.params.id);
      const data = await req.body;
      const estate = await database
        .collection("estates")
        .updateOne({ id: id }, { $set: data }, { new: true });
      res.json(estate);
    });

    app.delete("/api/estate/:id", async (req, res) => {
      const id = req.params.id;
      const estate = await database
        .collection("estates")
        .deleteOne({ _id: new ObjectId(id) });
      res.json(estate);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
