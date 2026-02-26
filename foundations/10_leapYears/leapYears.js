const leapYears = function (year) {
  if (year % 4 === 0 && year % 400 === 0) {
    console.log(`Year ${year} is leap`);
    return true;
  } else if (year % 100 === 0) {
    console.log(`Year ${year} is not leap`);
    return false;
  } else {
    console.log(`Year ${year} is not leap`);
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
