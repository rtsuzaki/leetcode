var reconstructQueue = function(people) {
    let sorted = people.sort((a,b) => {   
        if(a[0] != b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });
    let output = [];
    for (let i = 0; i < sorted.length; i++) {
        output.splice(sorted[i][1], 0, sorted[i]);
    }
    return output;
};