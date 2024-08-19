const convertToCelsius = function(fahrenheit) {
  let x = fahrenheit
  let outputCel = (x - 32) * 5/9
  let outputCelRounded = parseFloat(outputCel.toFixed(1))
  return outputCelRounded;
};

const convertToFahrenheit = function(celsius) {
  let y = celsius
  let outputFah = (y * (9/5) + 32)
  let outputFahRounded = parseFloat(outputFah.toFixed(1))
  return outputFahRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
