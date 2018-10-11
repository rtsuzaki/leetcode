var findDuplicates = function(nums) {
    const output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j< nums.length; j++) {
            if (nums[i] === nums[j]) {
                output.push(nums[i])
            }
        }
    }
    return output;
};