var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    let current = '1';
    const getOutput = (prev) => {
        let digits = prev.split('');
        if (digits.length === 1) {
            return '' + 1 + digits[0];
        }
        let count = 1;
        let output = '';
        for (let i = 1; i < digits.length; i++) {
            if (digits[i] === digits[i - 1]) {
                count++;
            } else if (digits[i] !== digits[i - 1]){
                output += count + digits[i - 1];
                count = 1;
            }
            if (i === digits.length - 1) {
                if (digits[i] === digits[i - 1]) {
                    output += count + digits[i]
                } else {
                    output += '1' + digits[i]
                }
            }
        }
        return output;
    }
    for (let i = 1; i < n; i++) {
        current = getOutput(current)
    }
    return current;
};