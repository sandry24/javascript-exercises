const sumAll = function(left, right) {
    if (!Number.isInteger(left) || !Number.isInteger(right)) {
        return "ERROR";
    }

    if (left > right) {
        [left, right] = [right, left];
    }

    if (left < 0) {
        return "ERROR";
    }

    return right * (right + 1) / 2 - (left - 1) * left / 2;
};

// Do not edit below this line
module.exports = sumAll;
