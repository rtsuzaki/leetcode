var isPalindrome = function(x) {
    let orig = x;
    let str = x.toString().split('');
    let reversed = str.reverse().join('');
    console.log(orig)
    console.log(reversed)
    if (reversed === orig) {
        return true;
    } else {
        return false;
    }    
};
