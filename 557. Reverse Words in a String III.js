var reverseWords = function(s) {
    let words = s.split(' ');
    let outputWords = [];
    for (let i = 0; i < words.length; i++) {
        let word = ''
        for (let j = words[i].length -1; j >= 0; j--) {
            word += words[i][j]
        }
        outputWords.push(word);
    }
    
    return outputWords.join(' ')
};