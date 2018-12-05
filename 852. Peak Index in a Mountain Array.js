var peakIndexInMountainArray = function(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] < A[i - 1]) {
            return i - 1;
        }
    }
};