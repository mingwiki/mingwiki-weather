const axios = require('axios')

function getWeather(city) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api2.jirengu.com/getWeather.php?city=${encodeURI(city)}`)
      .then(function (response) {
        // handle success
        // console.log(response);
        resolve(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    // .then(function () {
    //   // always executed
    // })
  })
}

module.exports.get = getWeather