var uncommonFromSentences = function(A, B) {
    let words = {};
    let output = [];
    let Awords = A.split(' ');
    let Bwords = B.split(' ')
    Awords.forEach((word) => {
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word] ++;
        }
    })
    Bwords.forEach((word) => {
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word] ++;
        }
    })
    Object.keys(words).forEach((key) => {
        if (words[key] === 1) {
            output.push(key);
        }
    })
    return output
};