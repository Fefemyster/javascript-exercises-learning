const sumAll = function (num1, num2) {
  //1. Declare an empty array for saving the generated numbers
  let arr = [];

  for (i = num1; i <= num2; i++) {
    //2. Generate numbers
    let generatedNumbers = i;

    //3 Put numbers into our empty array

    arr.push(generatedNumbers);
  }
  //4. Sum all the numbers inside the array
  let result = arr.reduce((sum, current) => sum + current);

  return result;
};

// Do not edit below this line
module.exports = sumAll;
