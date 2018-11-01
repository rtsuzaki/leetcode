var isMonotonic = function(A) {
    if (A.length <= 1) {
        return true;
    }
    let increasing = null;
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            if (increasing === false) {
                return false;
            }
            increasing = true;
        } else if (A[i] < A[i - 1]) {
            if (increasing === true) {
                return false;
            }
            increasing = false;
        }
    }
    return true;
};