var plusOne = function(digits) {
    const add = (index) => {
        if (digits[index] !== 9) {
            digits[index] += 1;
            return digits;
        } else if (digits[index] === 9) {
            if (index !== 0) {
                digits[index] = 0;
                console.log(digits)
                return add(index - 1);    
            } else {
                digits[index] = 0;
                digits.unshift(1);
                return digits;
            }
        }
    }
    return add(digits.length - 1)
};