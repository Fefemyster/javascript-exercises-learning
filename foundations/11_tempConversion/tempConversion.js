const convertToCelsius = function (temp) {
  tempCelsius = (temp - 32) / 1.8;
  return tempCelsius.toFixed(2) + "°C";
};

const convertToFahrenheit = function (temp) {
  tempFahrenheit = temp * 1.8 + 32;
  return tempFahrenheit.toFixed(2) + "°F";
};

convertToCelsius(32); // fahrenheit to celsius, should return 0

convertToFahrenheit(0); // celsius to fahrenheit, should return 3

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
