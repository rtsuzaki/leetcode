var findPairs = function(nums, k) {
    let count = 0;
    let usedNums = {};
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (Math.abs(nums[j] - nums[i]) === k && !usedNums[sum]) {
                    count++;
                    usedNums[sum] = true;
            }
        }
    }
    return count;
};