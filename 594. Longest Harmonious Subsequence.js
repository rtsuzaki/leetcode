var findLHS = function(nums) {
    if (nums.length < 2) {
        return 0;
    }
    let finalMaxLength = 0;
    
    let sorted = nums.sort((a,b) => a -b);
    console.log('sorted', sorted)
    
    for (let i = 0; i < sorted.length; i++) {
        for (let j = sorted.length - 1; j > i; j--) {
            if (sorted[j] - sorted[i] === 1) {
                if (j - i + 1 > finalMaxLength) {
                    finalMaxLength = j - i + 1;
                }
            }
        }
    }
    
    return finalMaxLength;
};