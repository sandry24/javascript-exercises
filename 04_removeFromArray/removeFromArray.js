const removeFromArray = function(array, ...args) {
    const newArray = [];
    for (const elem of array) {
        if (!args.includes(elem))
            newArray.push(elem);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
