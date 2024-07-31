const palindromes = function (s) {
    s = s
    .split('')
    .filter(isAlphanumeric)
    .join('')
    .toLowerCase();
    let n = s.length;
    for (let i = 0; i <= n/2; i++) 
        if (s[i] !== s[n - i - 1])
            return false;
    return true;
};

let isAlphanumeric = function(ch) {
    return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'));
}

// Do not edit below this line
module.exports = palindromes;
