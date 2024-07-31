const fibonacci = function(n) {
    n = +n;

    if (n < 0)
        return "OOPS";
    
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
