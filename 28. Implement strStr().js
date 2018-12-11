var strStr = function(haystack, needle) {
    let needleSize = needle.length;
    if (haystack.length < needleSize) {
        return -1;
    }
    for (let i = 0; i < haystack.length - needleSize + 1; i++) {
        if (haystack.slice(i, i+needleSize) === needle) {
            return i;
        }
    }
    return -1;
};