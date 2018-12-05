var numSubarraysWithSum = function(A, S) {
    let counts = 0;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j]
            if (sum === S) {
                counts++;
            }
        }
    }
    return counts
};