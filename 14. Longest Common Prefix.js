var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    } else if (strs.length === 1) {
        return strs[0];
    }
    
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    
    return strs[0];
};