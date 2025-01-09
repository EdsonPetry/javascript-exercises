const leapYears = function(year) {
    const condition1 = (year % 4 == 0) && !(year % 100 == 0);
    const condition2 = (year % 100 == 0) && (year % 400 == 0);
    
    if (condition1){
        return true;
    } else if (condition2) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
