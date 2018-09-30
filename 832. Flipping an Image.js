var flipAndInvertImage = function(A) {
    let img = A;
    img.forEach((row) => {
        row.reverse();
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 1) {
                row[i] = 0;
            } else {
                row[i] = 1;
            }
        }
    })
    return img
    
};