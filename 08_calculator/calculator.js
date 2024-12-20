const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => add(total, current), 0);
};

const multiply = function(array) {
  if (array.length < 1) return 0;
  return	array.reduce((total, current) => total * current, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	if (num === 0) return 1;
  let factorialSum = 1;
  for (let i = 1; i < num + 1; i++) {
    factorialSum *= i;
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
