var pivotIndex = function(nums) {
    if (nums.length === 0) {
        return -1;
    }
    let total = nums.reduce((a,b) => a + b);
    console.log(total)
    let currSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            currSum = 0;
        } else {
            currSum += nums[i - 1]; 
        }
        if (currSum === ((total - nums[i])/2)) {
            return i;
        }
    }
    return - 1;
};