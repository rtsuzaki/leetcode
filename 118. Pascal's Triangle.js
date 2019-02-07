var generate = function(numRows) {
    let output = [[1]];
    if (numRows === 0) {
        return []
    }
    
    if (numRows === 1) {
        return output;
    };
    
    const addRow = (prevLevel) => {
        let nextRow = [];
        for (let i = 0; i < output[prevLevel].length; i++) {
            if (i === 0) {
                nextRow.push(1);
            } else {
                nextRow.push(output[prevLevel][i] + output[prevLevel][i - 1]);
            }
        }
        nextRow.push(1);
        output.push(nextRow);
        
        if (output.length === numRows) {
            return;
        } else {
            addRow(prevLevel + 1);
        }
    }
    
    addRow(0);
    
    return output;
};