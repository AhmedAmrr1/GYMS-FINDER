const express = require('express');
const { getGymsNearMe } = require('./src/controllers/gymController');
const apiRoutes = require('./src/routes/apiRoutes'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Gym Search API is running!');
});

// Middleware for JSON parsing
app.use(express.json());

// Use the API routes
app.use(apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});