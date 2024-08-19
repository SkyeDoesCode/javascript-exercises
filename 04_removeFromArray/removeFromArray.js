const removeFromArray = function (array, ...args) {
let newArray = [];
array.forEach((array) => {
  if (!args.includes (array)) {
    newArray.push(array);
  }

});
  return newArray;
}
// Do not edit below this line
module.exports = removeFromArray;
