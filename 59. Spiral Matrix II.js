var generateMatrix = function(n) {
    let output = [];
    for (let i = 0; i < n; i++) {
        output.push([]);
    }
    let val = 1;
    
    const spiral = (left, right, top, bottom) => {
        while (left <= right && top <= bottom) {
            for (let i = left; i <= right; i++) {
                output[top][i] = val
                val++;
            }
            top++;
            
            for (let i = top; i <= bottom; i++) {
                output[i][right] = val;
                val++;
            }
            right--;
            
            for (let i = right; i >= left; i--) {
                output[bottom][i] = val;
                val++;
            }
            bottom--;
            
            for (let i = bottom; i >= top; i--) {
                output[i][left] = val;
                val++
            }
            left++;
        }
    }
    
    spiral(0, n - 1, 0, n - 1);
    return output;
};