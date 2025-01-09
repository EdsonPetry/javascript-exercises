const palindromes = function (str) {
    strArray = str.toLowerCase().split("");
    letters = strArray.filter(isLetter);
    reversed_letters = letters.toReversed();

    return letters.join("") === reversed_letters.join("");

};

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]|[0-9]/i);
}

// Do not edit below this line
module.exports = palindromes;
