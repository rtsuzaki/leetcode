var hammingWeight = function(n) {
    let binary = n.toString(2);
    return binary.split('0').join('').length;
};