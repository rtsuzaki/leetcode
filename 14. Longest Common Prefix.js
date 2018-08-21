var longestCommonPrefix = function(strs) {
    let output = '';
    if (strs.length === 0) {
        return output
    }
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return output
            } else {
                if (j === strs.length - 1) {
                    output += strs[0][i]
                    console.log(output)
                }
            }
        }
    }
    return output
};

longestCommonPrefix(["flower","flow","flight"])