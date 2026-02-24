const removeFromArray = function (items, condition) {
  return items.filter((item) => {
    return item !== condition;
  });
};

let items = [1, 2, 3, 4, 5];
// Do not edit below this line
module.exports = removeFromArray;
