var sumEvenAfterQueries = function(A, queries) {
    let output = [];
    let evenSum = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            evenSum += A[i];
        }
    }
    
    for (let i = 0; i < queries.length; i++) {
        let val = queries[i][0];
        let index = queries[i][1];
        let prev = A[index];
        A[index] += val;
        if (prev % 2 === 0 && A[index] % 2 === 0) {
            evenSum = evenSum - prev + A[index];
        } else if (prev % 2 === 0 && A[index] % 2 !== 0) {
            evenSum = evenSum - prev;
        } else if (prev % 2 !== 0 && A[index] % 2 === 0) {
            evenSum = evenSum + A[index];
        }
        output.push(evenSum)
    }
    return output;
};