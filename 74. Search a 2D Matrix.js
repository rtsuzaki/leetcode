var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][matrix[0].length - 1] >= target) {
            for (let c = 0; c < matrix[0].length; c++) {
                if (matrix[r][c] === target) {
                    return true;
                } else if (c === matrix[0].length - 1) {
                    return false;
                }
            }
        } else if (r === matrix.length - 1) {
            return false;
        }
    }
};