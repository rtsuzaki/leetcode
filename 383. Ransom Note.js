var canConstruct = function(ransomNote, magazine) {
    let ransomLetters = ransomNote.split('');
    let magazineLetters = magazine.split('');
    if (ransomLetters.length > magazineLetters) {
        return false;
    } else {
        let output = true;
        ransomLetters.forEach((letter) => {
            if (magazineLetters.indexOf(letter) === -1) {
                output = false;
                return;
            } else {
                magazineLetters[magazineLetters.indexOf(letter)] = 'used';
                
            }
        })
        return output;
    }
};