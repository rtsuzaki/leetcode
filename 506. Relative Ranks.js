var findRelativeRanks = function(nums) {
    let sorted = nums.slice(0).sort((a,b) => b - a);
    let output = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === sorted[0]) {
            output.push('Gold Medal')
        } else if (nums[i] === sorted[1]) {
            output.push('Silver Medal')
        } else if (nums[i] === sorted[2]) {
            output.push('Bronze Medal')
        } else {
            output.push((sorted.indexOf(nums[i])+ 1).toString());
        }
    }
    return output
};