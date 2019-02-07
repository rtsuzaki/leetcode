var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        let end = nums.pop();
        nums.unshift(end);
    }
    
    return nums;
};