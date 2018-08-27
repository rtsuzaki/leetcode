var reverseWords = function(s) {
    let words = s.split(' ');
    let output = '';
    words.forEach((word) => {
        for (let i = word.length - 1; i >= 0; i--) {
            output += word[i]
        }
        output += ' ';
    })
    return output.slice(0, output.length-1)
};