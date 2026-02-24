const repeatString = function (word, times) {
  if (times < 0) {
    return "ERROR";
  }
  let string = "";

  for (i = 0; i < 3; i++) {
    string = string + word;
  }

  return string;
};
// repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
