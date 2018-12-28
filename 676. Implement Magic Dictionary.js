/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    this.dict = [];
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.dict = dict;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    let output = false;
    for (let dictWord of this.dict) {
        let diff = 0;
        if (dictWord.length === word.length) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== dictWord[i]) {
                    diff++;
                }
            }
            if (diff === 1) {
                output = true;
            }
        }
    }
    return output;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */