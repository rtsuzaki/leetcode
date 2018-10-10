var shortestToChar = function(S, C) {
    const letters = S.split('');
    const indices = [];
    const output = [];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === C) {
            indices.push(i)
        }
    }
    for (let j = 0; j < letters.length; j++) {
        let min = Math.abs(indices[0] - j);
        indices.forEach((index) => {
            if (Math.abs(index-j) < min) {
                min = Math.abs(index - j)
            }
        })
        output.push(min)
    }
    return output;
};