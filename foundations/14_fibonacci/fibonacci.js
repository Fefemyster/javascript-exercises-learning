const fibonacci = function (number) {
  //1st. Will try a for cycle for n iterations
  //2nd. Define a starting point
  let initialValue = 1;
  let currentValue = 0;

  for (i = 1; i <= number; i++) {
    let result = initialValue + currentValue;
    //3rd. Need my result to be save and updated
    currentValue = initialValue;
    initialValue = result;
  }

  return console.log(currentValue);
};

fibonacci(6); // returns 8

//the sum of the two preceding numbers.

/*
1,1,2,3,5,8,13,21

1+1=2
2+1=3
3+2=5
5+3=8


initial value will always be 1 and it will stop when reaches the number of iterations passed as number
the function returns the fibonacci of the number provided


*/

// Do not edit below this line
module.exports = fibonacci;
