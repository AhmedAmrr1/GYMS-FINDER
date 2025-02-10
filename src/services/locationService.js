const { fetchData } = require('../utils/apiUtils');
const { IPINFO_URL } = require('../config/constants');

async function getLocation() {
  const data = await fetchData(IPINFO_URL);
  const [lat, lon] = data.loc.split(',');
  return { lat, lon };
}

module.exports = { getLocation };