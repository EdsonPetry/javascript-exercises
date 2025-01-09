const convertToCelsius = function(fahrenheit) {
  // Formula (x-32) * (5/9) as per https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
  if (fahrenheit === 32){
    return 0;
  }
  else {
    return parseFloat(((fahrenheit-32)*(5/9)).toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  if (celsius === 0){
    return 32;
  } else {
    return parseFloat(((celsius*(1.8))+32).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
