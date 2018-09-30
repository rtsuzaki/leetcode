var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (sum + nums[i] > nums[i]) {
            sum = sum + nums[i];
        } else {
            sum = nums[i];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};