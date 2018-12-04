var reverseOnlyLetters = function(S) {
    let letters = [];
    for (let i = 0; i < S.length; i++) {
        if (/^[a-zA-Z]/.test(S[i])) {
            letters.push(S[i]);
        }
    }
    let output = '';
    for (let j = 0; j < S.length; j++) {
        if (/^[a-zA-Z]/.test(S[j])) {
            output += letters.pop();
        } else {
            output += S[j]
        }
    }
    return output;
};