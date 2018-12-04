var diStringMatch = function(S) {
    let min = 0;
    let max = S.length;
    let output = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'I') {
            output.push(min);
            min++;
        } else {
            output.push(max);
            max--;
        }
    }
    output.push(min)
    return output;
};