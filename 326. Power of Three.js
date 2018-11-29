var isPowerOfThree = function(n) {
    if (n === 1) {
        return true;
    }
    
    let currentTotal = 3;
    while (currentTotal <= n) {
        if (currentTotal === n) {
            return true;
        } else {
            currentTotal = currentTotal * 3;
        }
    }
    return false;
};