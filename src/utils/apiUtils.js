const axios = require('axios');

async function fetchData(url, params = {}, headers = {}) {
  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error.message);
    throw error;
  }
}

module.exports = { fetchData };