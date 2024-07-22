const removeFromArray = function(...args) {
    array = args[0];
    for (let i = 1; i < args.length; i++) {
        let index = array.indexOf(args[i]);
        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(args[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
