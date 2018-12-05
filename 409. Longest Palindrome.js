var longestPalindrome = function(s) {
    let letters = {};
    for (let i = 0; i < s.length; i++) {
        if (!letters[s[i]]) {
            letters[s[i]] = 1;
        } else {
            letters[s[i]]++;
        }
    }
    let count = 0;
    let hasOdd = false;
    for (let key in letters) {
        if (letters[key] % 2 !== 0) {
            hasOdd = true;
        }
        count += Math.floor(letters[key]/2)*2;
    }
    if (hasOdd) {
        count++;
    }
    return count;
};