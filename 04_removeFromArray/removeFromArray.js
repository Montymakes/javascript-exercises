const removeFromArray = function(array, ...args) {
    const newArray = array.filter((element) => !(args.includes(element)));
    return newArray;
};
console.log(removeFromArray([1,2,3,"4",4], 1, "4"));
// Do not edit below this line
module.exports = removeFromArray;
