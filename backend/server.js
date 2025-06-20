const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let collection;

app.use(express.json());

app.get('/cars', async (req, res) => {
  try {
    const cars = await collection.find({}).toArray();
    res.json(cars);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get('/cars/:brand', async (req, res) => {
  try {
    const brand = req.params.brand;
    const cars = await collection.find({ brand }).toArray();
    res.json(cars);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

async function start() {
  try {
    await client.connect();
    const db = client.db('cars');
    collection = db.collection('cars');

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

start();
