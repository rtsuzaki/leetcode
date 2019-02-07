var minSubArrayLen = function(s, nums) {
    let minLength = null;
    
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        let count = 1;
        let space = 1;
        while (sum < s && i + space < nums.length) {
            sum += nums[i + space];
            count++;
            space++;
        }
        
        if (sum >= s) {
            if (minLength === null || count < minLength) {
                minLength = count;
            }
        }
    }
    
    if (minLength === null) {
        return 0;
    }
    
    return minLength;
};