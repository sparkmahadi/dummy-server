const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { connectToDB } = require('./db');
const { ObjectId } = require('mongodb');
const { db } = require('./db');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Connect to MongoDB (only once)
connectToDB()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Modern Poultry by Mahadi, Server is running on Vercel!');
});

// Export the app for Vercel
module.exports = app;
