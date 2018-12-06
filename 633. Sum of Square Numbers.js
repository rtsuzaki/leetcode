var judgeSquareSum = function(c) {
    let max = Math.ceil(Math.sqrt(c));
    for (let i = 0; i <= max; i++) {
        if (Number.isInteger(Math.sqrt(c - i*i))) {
            return true;
        }
    }
    return false;
};