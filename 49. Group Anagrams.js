var groupAnagrams = function(strs) {
    let anagrams = [];
    let sortedWords = {};
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i].split('').sort().join('')
        if (!sortedWords[word]) {
            sortedWords[word] = [strs[i]];
        } else {
            sortedWords[word].push(strs[i]);
        }
    }
    for(let key in sortedWords) {
        anagrams.push(sortedWords[key])
    }
    return anagrams;
};