var twoSum = function(nums, target) {
    let desiredNums = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (desiredNums.hasOwnProperty(target - nums[i])) {
            return [desiredNums[target - nums[i]], i];
        }
        if (!desiredNums[nums[i]]) {
            desiredNums[nums[i]] = i;
        }
    }
};