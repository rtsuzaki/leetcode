var singleNumber = function(nums) {
    //I: array of integers
    //O: integer that occurs once in the array
    //C: non-empty array, linear, constant space
    
    let frequencies = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (!frequencies[nums[i]]) {
            frequencies[nums[i]] = 1;
        } else {
            frequencies[nums[i]]++;
        }
    }
    
    let output;
    
    Object.keys(frequencies).forEach((key) => {
        if (frequencies[key] === 1) {
            output = parseInt(key)
        }
    })
    return output;
};