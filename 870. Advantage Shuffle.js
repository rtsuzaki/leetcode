var advantageCount = function(A, B) {
    let output = [];
    let sortedA = A.sort((a, b) => a - b);
    
    for (let i = 0; i < B.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[j] > B[i]) {
                output.push(A[j]);
                A.splice(j, 1)
                j--;
                break;
            } else if (j === A.length - 1) {
                output.push(A[0]);
                A.shift();
                j--;
                break;
            }
        }
    }
    console.log(output)
    return output;
};