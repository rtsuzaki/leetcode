var findDuplicate = function(nums) {
    if (nums.length === 2) {
        return nums[0]
    }
    
    let sorted = nums.sort((a,b) => a - b);
    for (let i = 1; i < sorted.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return nums[i];
        }
    }
};