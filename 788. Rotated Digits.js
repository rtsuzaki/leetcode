var rotatedDigits = function(N) {
    let count = 0;
    let rotatable = {0: '0', 1: '1', 8: '8', 2: '5', 5: '2', 6:'9', 9:'6'}
    for (let i = 1; i <= N; i++) {
        let num = i.toString().split('');
        let pass = true;
        let newNum = [];
        num.forEach((digit) => {
            if (rotatable[digit]) {
                newNum.push(rotatable[digit])
            } else {
                pass = false;
            }
        })
        if (newNum.join('') !== num.join('') && pass) {
          count++;
        }
    }
    return count;
};