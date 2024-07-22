const leapYears = function(year) {
    if (!Number.isInteger(year)) return false;
    if (year < 0) return false;
    
    if (year % 4) return false;
    if (year % 100) return true;
    if (year % 100 == 0 && year % 400 == 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
