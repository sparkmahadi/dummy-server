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

connectToDB()
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('🚀 Modern Poultry by Mahadi — running locally or on Vercel!');
});

// ✅ Run locally only if not in Vercel environment
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`✅ Server running locally on port ${port}`));
}

// ✅ Export for Vercel
module.exports = app;
