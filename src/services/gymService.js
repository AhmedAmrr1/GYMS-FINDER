const { fetchData } = require('../utils/apiUtils');
const { DEFAULT_RADIUS, CATEGORIES, DEFAULT_LIMIT, GEOAPIFY_URL } = require("../config/constants");

async function searchGyms(lat, lon, radius = DEFAULT_RADIUS) {
  const params = {
    categories: CATEGORIES,
    filter: `circle:${lon},${lat},${radius}`,
    limit: DEFAULT_LIMIT,
    apiKey: process.env.GEOAPIFY_API_KEY
  };
   
  // for testing validation of the url
   console.log(`${GEOAPIFY_URL}?${new URLSearchParams(params).toString()}`);
 
  const gyms = await fetchData(GEOAPIFY_URL, params);
  
  return gyms.features.map(gym => ({
    name: gym.properties.name || "Unknown Gym", 
    country:gym.properties.country,
    city: gym.properties.city,
    district:gym.properties.district,
    street:gym.properties.street,
    Address: gym.properties.formatted,
  }));
}
module.exports = { searchGyms };