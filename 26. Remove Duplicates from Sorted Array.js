var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};