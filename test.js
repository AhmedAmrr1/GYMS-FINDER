const axios = require('axios');

const API_KEY = "c9d7c2f5ee2d47fd840a40488dd6bdba"; // Your actual key
const GEOAPIFY_URL = "https://api.geoapify.com/v2/places";

async function testGeoapify() {
    const params = {
        categories: "activity.sport_club",
        filter: "circle:31.2357,30.0444,5000", // Correct format: circle:longitude,latitude,radius
        limit: 5,
        apiKey: API_KEY
    };

    try {
        console.log("Testing Geoapify API...");
        console.log("Request URL:", `${GEOAPIFY_URL}?${new URLSearchParams(params)}`);
        const response = await axios.get(GEOAPIFY_URL, { params });
        console.log("API Response:", response.data);
    } catch (error) {
        console.error("API request failed:", error.response ? error.response.data : error.message);
    }
}

// Run the function
testGeoapify();
