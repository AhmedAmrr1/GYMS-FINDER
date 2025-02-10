const { searchGyms } = require('../services/gymService');
const { getLocation } = require('../services/locationService');

const getGymsNearMe = async (req, res) => {
    try {
        // Step 1: Get user's location
        const location = await getLocation();
        if (!location) {
            return res.status(400).send('Could not fetch location.');
        }

        // Step 2: Search for gyms
        const gyms = await searchGyms(location.lat, location.lon);
        return res.status(200).json(gyms);
        
    } catch (error) {
        console.error('Error in getGymsNearMe:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getGymsNearMe };
