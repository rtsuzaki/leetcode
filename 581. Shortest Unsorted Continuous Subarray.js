var findUnsortedSubarray = function(nums) {
    let sorted = nums.slice(0).sort((a,b) => a - b);
    
    let wrongIndices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sorted[i]) {
            wrongIndices.push(i);
        }
    }
    
    if (wrongIndices.length === 0) {
        return 0;
    } else {
        return wrongIndices[wrongIndices.length - 1] - wrongIndices[0] + 1;
    }
};