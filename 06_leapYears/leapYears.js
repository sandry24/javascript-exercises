const leapYears = function(year) {
    if (!Number.isInteger(year)) return false;
    if (year < 0) return false;
    
    if (!(year % 4) && ((year % 100) || !(year % 400)))
        return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
