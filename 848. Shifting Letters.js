var shiftingLetters = function(S, shifts) {
    let charCodes = [];
    let shift;
    for (let i = 0; i < S.length; i++) {
        charCodes.push(S.charCodeAt(i));
    }
    
    for (let i = 0; i < shifts.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (shifts[i] > 26) {
                shift = shifts[i] % 26;
            } else {
                shift = shifts[i]
            }
            charCodes[j] = charCodes[j] + shift;
            if (charCodes[j] > 122) {
                charCodes[j] = charCodes[j] - 122 + 96;
            }
        }
    }
    
    let converted = charCodes.map((code) => String.fromCharCode(code))
    return converted.join('')
};