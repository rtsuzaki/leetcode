var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            if (count > maxCount) {
                maxCount = count;
            }
            count = 0;
        }
    }
    
    if (count > maxCount) {
        maxCount = count;
    }
    
    return maxCount;
};