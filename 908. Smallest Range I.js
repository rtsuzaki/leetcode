var smallestRangeI = function(A, K) {
    let min = A[0];
    let max = A[0];
    for (let i = 0; i < A.length; i++) {
        if (A[i] < min) {
            min = A[i];
        }
        if (A[i] > max) {
            max = A[i];
        }
    }
    let diff = max - min;
    if (diff <= K*2) {
        return 0;
    } else {
        min = min + Math.abs(K);
        max = max - Math.abs(K);
        return max - min;
    }
};