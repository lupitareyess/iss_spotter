// Making 3 API requests:

// 1. Fetch our IP address

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');

const url = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  request(url, (error, response, body) => {
    // error can be set if invalid domain, user is offline, etc.
    if (error) {
      return callback(error, null);
    }
    // if non-200 status, assumer server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const data = JSON.parse(body);
    const IP = data.ip;
    callback(null, IP);

  });
};


module.exports = { fetchMyIP };





// 2. Fetch the geo coordinates for our IP

// 3. Fetch the next ISS flyovers for out geo coordinates