var matrixReshape = function(nums, r, c) {
    if (r*c !== nums.length * nums[0].length) {
        return nums;
    } else {
        let output = [];
        let allNums = [];
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums[0].length; j++) {
                allNums.push(nums[i][j]);
            }
        }
        
        for (let row = 0; row < r; row++) {
            let outputRow = [];
            for (let col = 0; col < c; col++) {
                outputRow.push(allNums.shift());
            }
            output.push(outputRow)
        }
        return output;
    }
};