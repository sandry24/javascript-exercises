const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((total, current) => total + current, 0);
};

const multiply = function(a) {
  return a.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let answer = 1;
  for (let i = 2; i <= a; i++)
    answer *= i;
  return answer;
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
