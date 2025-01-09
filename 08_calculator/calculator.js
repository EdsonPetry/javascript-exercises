const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let total = 0;
  numbers.forEach(element => total+=element);
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  numbers.forEach(element => total*=element);
  return total;
};

const power = function(base, power) {
	return base**power;
};

const factorial = function(num) {
	if (num===0 || num===1){
    return 1;
  } else {
    return num * factorial(num-1);
  }
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
