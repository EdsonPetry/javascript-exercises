const repeatString = function(string, n) {
    try {
        return string.repeat(n);
    } catch (error) {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
