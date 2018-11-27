var largeGroupPositions = function(S) {
    let letters = S.split('');
    let output = [];
    let index = 0;
    let count = 1;
    
    for (let i = 1; i < letters.length; i++) {
        if (letters[i] === letters[index]) {
            count++;
        } else if (letters[i] !== letters[index]) {
            if (count >= 3) {
                output.push([index, i - 1]);
                index = i;
                count = 1;
            } else {
                index = i;
                count = 1;
            }
        }
        if (i === letters.length - 1) {
            if (count >= 3) {
                output.push([index, i])
            }
        }
    }
    return output;
};