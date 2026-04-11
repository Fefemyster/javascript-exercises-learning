const palindromes = function (text) {
  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  //1st. Convert text into an array
  const cleanArray = text
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  //2nd. Reverse string
  const reversedArray = cleanArray.split("").reverse().join("");

  //3rd. Compare original array with reverse one
  /*
  if (cleanArray === reversedArray) {
    return true;
  } else {
    return false;
  }
    */

  return cleanArray === reversedArray;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
