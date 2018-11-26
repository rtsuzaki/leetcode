var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    for (let num of A) {
        if (num % 2 === 0) {
            even.push(num)
        } else {
            odd.push(num);
        }
    }
    return even.concat(odd)
};