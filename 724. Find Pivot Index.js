var pivotIndex = function(nums) {
    if (nums < 3) {
        return -1;
    }
    let total = nums.reduce((a,b) => a + b);
    console.log(total);
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0) {
           currentSum += nums[i - 1]; 
        } else {
            currentSum = 0;
        }
        
        console.log(currentSum, i)
        if (currentSum === (total - nums[i])/2) {
            return i;
        }
    }
    return -1;
};