// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return
//   }

//   console.log("It worked! Returned IP:", ip);
// });

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('99.233.255.89', (error, coordinates) => {
  if (error) {
    console.log("It didn't work", error);
    return;
  }
  console.log("It worked! Returned coordinates:", coordinates);

});

