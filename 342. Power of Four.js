var isPowerOfFour = function(num) {
    let current = 1;
    while (current <= num) {
        console.log(current)
        if (current === num) {
            return true;
        } else if (current > num) {
            return false;
        } else {
            current = current * 4;
        }
    }
    return false;
};