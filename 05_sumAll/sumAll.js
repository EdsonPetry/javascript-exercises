const sumAll = function (num1, num2) {
    let total = 0;

    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2))) return "ERROR";
    if ((num1 < 0) || (num2 < 0)) return "ERROR";

    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    for (i = min; i <= max; i++) total += i;

    return total;

};

// Do not edit below this line
module.exports = sumAll;
