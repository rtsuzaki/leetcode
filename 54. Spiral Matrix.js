var spiralOrder = function(matrix) {
    let output = [];
    if (matrix.length === 0) {
        return [];
    }
    
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    const spiral = (left, right, top, bottom) => {
        while(left <= right && top <= bottom) {
            for (let i = left; i <= right; i++) {
                output.push(matrix[top][i]);
            }
            top++;
            for (let i = top; i <= bottom; i++) {
                output.push(matrix[i][right]);
            }
            right--;
            if (top <= bottom) {
              for (let i = right; i >= left; i--) {
                output.push(matrix[bottom][i]);
                console.log('bot')
              }
              bottom--;
            }
            if (left <= right) {
              for (let i = bottom; i >= top; i--) {
                output.push(matrix[i][left]);
              }
              left++;
            }
        }
    }
    spiral(left, right, top, bottom);
    return output;
};