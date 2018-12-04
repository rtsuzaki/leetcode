var kthSmallest = function(matrix, k) {
    let nums = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            nums.push(matrix[i][j]);
        }
    }
    let sorted = nums.sort((a,b) => a - b);
    return sorted[k - 1]
};