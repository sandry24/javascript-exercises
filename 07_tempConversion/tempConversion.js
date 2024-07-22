const convertToCelsius = function(x) {
  let degrees = (x - 32) * 5/9;
  let degreesRounded = Math.round(degrees * 10) / 10;
  return degreesRounded;
};

const convertToFahrenheit = function(x) {
  let degrees = x * 9/5 + 32;
  let degreesRounded = Math.round(degrees * 10) / 10;
  return degreesRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
