const reverseString = function(string) {
    reversedArray = [];

    for (i = string.length; i >= 0; i--){
        reversedArray.push(string.charAt(i));
    }
    
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
