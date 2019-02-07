var getRow = function(rowIndex) {
    let root = [1];
    if (rowIndex < 0) {
        return [];
    }
    if (rowIndex === 0) {
        return root;
    }
    const makeRow = (prevRow, prevLevel) => {
        if (prevLevel === rowIndex) {
            return prevRow;
        }
        
        let nextRow = [1];
        for (let i = 0; i < prevRow.length - 1; i++) {
            nextRow.push(prevRow[i] + prevRow[i + 1]);
        }
        nextRow.push(1);
        
        return makeRow(nextRow, prevLevel + 1);
    }
    
    return makeRow(root, 0);
};