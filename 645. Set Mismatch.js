var findErrorNums = function(nums) {
    let count = {};
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        if (!count[nums[i]]) {
            count[nums[i]] = 1;
        } else {
            output.push(nums[i])
        }
    }
    let current = 1;
    while (current <= nums.length) {
        if (!count[current]) {
            output.push(current);
        }
        current++;
    }
    return output;
};