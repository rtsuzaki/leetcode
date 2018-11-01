var minAddToMakeValid = function(S) {
    let count = 0;
    let lefts = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            lefts++;
        } else if (S[i] === ')') {
            if (lefts > 0) {
                lefts--;
            } else {
                count++;
            }
        }
    }
    return count + lefts;
};