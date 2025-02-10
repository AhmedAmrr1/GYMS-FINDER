const express = require('express');
const { getGymsNearMe } = require('./src/controllers/gymController');
const apiRoutes = require('./src/routes/apiRoutes'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Serve static files from the "public" directory
app.use(express.static('./public'));

 app.get('/', (req, res) => {
  res.sendFile('/public/index.html'); // Serve the HTML file
});
 
// Middleware for JSON parsing
app.use(express.json());

// Use the API routes
app.use(apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});