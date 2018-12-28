var repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++) {
        let substring = s.slice(0,i)
        let multiple = s.length/substring.length;
        let testString = ''
        for (let i = 0; i < multiple; i++) {
            testString += substring;
        }
        if (testString === s) {
            return true;
        }
    }
    return false;
};