var hasAlternatingBits = function(n) {
    let bit = n.toString(2);
    if (bit.length < 2) {
        return true;
    }
    for (let i = 1; i < bit.length; i++) {
        if (bit[i] === bit[i - 1]) {
            return false;
        }
    }
    return true;
};