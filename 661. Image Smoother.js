var imageSmoother = function(M) {
    let output = [];
    
    for (let row = 0; row < M.length; row++) {
        output.push([]);
        for (let col = 0; col < M[0].length; col++) {
          output[row][col] = 0;
        }
    }
    
    for (let r = 0; r < M.length; r++) {
        for (let c = 0; c < M[0].length; c++) {
            let count = 0;
            for (let outerRow = r - 1; outerRow <= r + 1; outerRow++) {
                for (let outerCol = c - 1; outerCol <= c + 1; outerCol++) {
                    if (outerRow >= 0 && outerRow < M.length && outerCol >= 0 && outerCol < M[0].length) {
                        output[r][c] += M[outerRow][outerCol];
                        count++;
                    }
                }
            }
            output[r][c] = Math.floor(output[r][c]/count);
        }
    }
    
    return output;
};