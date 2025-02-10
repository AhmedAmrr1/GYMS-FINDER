const express = require("express");
const router = express.Router();
const { getGymsNearMe } = require('../controllers/gymController');

// Define the route for gym search
router.get('/api/gyms', getGymsNearMe);

module.exports = router;