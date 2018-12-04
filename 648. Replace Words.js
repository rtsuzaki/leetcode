var replaceWords = function(dict, sentence) {
    let output = [];
    let wordsInSentence = sentence.split(' ');
    for (let word of wordsInSentence) {
        let wordToPush = null;
        for (let root of dict) {
            let sizeOfRoot = root.length;
            if (word.slice(0, sizeOfRoot) === root && (wordToPush === null || sizeOfRoot < wordToPush.length)) {
                wordToPush = root;
            }
        }
        if (wordToPush === null) {
            wordToPush = word
        }
        output.push(wordToPush);
    }
    return output.join(' ')
};