var fairCandySwap = function(A, B) {
    let sumA = A.reduce((a,b) => a + b);
    let sumB = B.reduce((a,b) => a + b);
    let targetSum = (sumA + sumB)/2;
    console.log(sumA, sumB, targetSum)
    if (sumA === targetSum) {
        return [];
    }

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            if (sumA + B[j] - A[i] === targetSum) {
                return [A[i], B[j]];
            }
        }
    }
};