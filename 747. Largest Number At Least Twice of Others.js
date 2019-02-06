var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== max) {
            if (nums[i]*2 > max) {
                return - 1;
            }
        }
    }
    return nums.indexOf(max)
};