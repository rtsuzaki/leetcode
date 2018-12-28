var repeatedNTimes = function(A) {
    let counts = {};
    
    for (let num of A) {
        if (!counts[num]) {
            counts[num] = 1;
        } else {
            counts[num]++;
            if (counts[num] === A.length/2) {
                return num;
            }
        }
    }
};