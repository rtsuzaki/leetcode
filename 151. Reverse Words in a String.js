var reverseWords = function(str) {
    let hitLetter = false;
    let words = str.split(' ');
    let result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== ' ') {
            if(words[i] !== '') {
                result.push(words[i]) 
            }
        }
    }
    return result.join(' ')
};