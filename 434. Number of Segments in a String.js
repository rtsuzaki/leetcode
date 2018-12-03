var countSegments = function(s) {
    let count = 0;
    let spaceBefore = true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && spaceBefore) {
            count++;
            spaceBefore = false;
        } else if (s[i] === ' ') {
            spaceBefore = true;
        }
    }
    return count;
};