var sortArrayByParityII = function(A) {
    let even = [];
    let odd = [];
    for (let num of A) {
        if (num % 2 === 0) {
            even.push(num)
        } else {
            odd.push(num);
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (i % 2 === 0) {
            A[i] = even.pop();
        } else {
            A[i] = odd.pop();
        }
    }
    return A;
};