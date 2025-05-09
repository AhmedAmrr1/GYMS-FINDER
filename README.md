Gym Finder
==========

Gym Finder is a web application that helps users locate gyms near their current location. It uses the Geoapify API to search for gyms and the IPInfo API to determine the user's location based on their IP address. 
The application is built with Node.js, Express, and vanilla JavaScript, providing a simple and responsive user interface.

Features
--------

- **Location-Based Search**: Automatically detects the user's location using their IP address.
- **Gym Listings**: Displays a list of nearby gyms with details such as name, address, city, and district.
- **Responsive Design**: Optimized for both desktop and mobile devices with a clean, user-friendly interface.
- **Error Handling**: Provides feedback for failed API requests or when no gyms are found.


Tech Stack
----------

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, vanilla JavaScript
- **APIs**: Geoapify (for gym search), IPInfo (for geolocation)
- **Dependencies**: Axios (for API requests), Dotenv (for environment variables)
- **Styling**: Custom CSS with media queries for responsiveness


Prerequisites
-------------

Before running the application, ensure you have the following installed:

- Node.js <https://nodejs.org/>_ (v16 or higher)
- npm <https://www.npmjs.com/>_ (comes with Node.js)
- A Geoapify API key <https://www.geoapify.com/>_ for gym search
- An `IPInfo API key <https://ipinfo.io/>_ for geolocation (optional, as the free tier may suffice for testing)

Installation
------------

Follow these steps to set up and run the project locally:

1. **Clone the Repository**:

      ``git clone https://github.com/your-username/gym-finder.git
      cd gym-finder``

2. **Install Dependencies**:


    ``npm install``


3. **Run the Application**:

      ``npm start``

   The server will start at ``http://localhost:5000`` (or the port specified in your ``.env`` file).

5. **Access the Application**:
   Open your browser and navigate to ``http://localhost:5000``. Click the "Search Gyms" button to find gyms near your location.



Usage
-----

1. Open the application in your browser.
2. Click the "Search Gyms" button.
3. The app will fetch your location and display a list of nearby gyms, including their names, addresses, cities, and districts.
4. If no gyms are found or an error occurs, a message will be displayed.

API Endpoints
-------------

- **GET /api/gyms**: Fetches a list of gyms near the user's location.
  - **Response**: JSON array of gym objects with ``name``, ``Address``, ``city``, and ``district`` fields.
  - **Example**:

``
       [
         {
           "name": "Fitness Hub",
           "Address": "123 Main St, Downtown, New York, NY",
           "city": "New York",
           "district": "Downtown"
         }
       ]
``


Configuration
-------------

The ``constants.js`` file contains default settings for the gym search:

- **DEFAULT_RADIUS**: 10,000 meters (10km)
- **DEFAULT_LIMIT**: 10 gyms
- **CATEGORIES**: Filters for sports clubs and gym-related facilities

You can modify these values in ``src/config/constants.js`` to adjust the search behavior.



best Wishes😉,
