var findLengthOfLCIS = function(nums) {
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        let prev = i;
        let current = i + 1;
        let count = 1;
        while(nums[current] > nums[prev] && current < nums.length && prev < nums.length) {
            count++;
            current++;
            prev++;
        }
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
};