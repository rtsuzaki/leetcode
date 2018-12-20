var maxArea = function(height) {
    let maxSum = 0;
    const checkWater = (l, r) => {
        if (r <= l) {
            return;
        } else {
            let min = Math.min(height[l], height[r]);
            let sum = (r - l)*min;
            if (sum > maxSum) {
                maxSum = sum;
            }
            checkWater(l, r - 1);
        }
    }
    for (let i = 0; i < height.length - 1; i++) {
        checkWater(i, height.length - 1);
    }
    
    
    return maxSum;
};