var searchMatrix = function(matrix, target) {
    let row = 0;
    let col = 0;
    output = false;
    const checkRow = (row) => {
        if (matrix[row][0] <= target && target <= matrix[row][matrix[0].length - 1]) {
            for (let i = 0; i < matrix[0].length; i++) {
                if (matrix[row][i] === target) {
                    output = true;
                    return;
                }
            }
        }
    }
    for (let j = 0; j < matrix.length; j++) {
        checkRow(j);
    }
    return output;
};