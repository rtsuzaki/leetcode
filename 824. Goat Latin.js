var toGoatLatin = function(S) {
    const vowels = {
        a: true,
        i: true,
        u: true,
        e: true,
        o: true
    }
    const words = S.split(' ');
    let output = [];
    for (let i = 0; i < words.length; i++) {
        let addedA = '';
        for (j = 0; j <= i; j++) {
            addedA += 'a';
        }
        if (vowels[words[i][0].toLowerCase()]) {
            output.push(words[i] + 'ma' + addedA);
        } else {
            let firstLetter = words[i].split('').shift();
            output.push(words[i].slice(1, words[i].length) + firstLetter + 'ma' + addedA);
        }
        
    }
    
    return output.join(' ');
};