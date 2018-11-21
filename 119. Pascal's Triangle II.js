var getRow = function(rowIndex) {
    let root = [1];
    const getRow = (lastRow, count) => {
        if (count === rowIndex) {
            return lastRow;
        }
        let row = [1];
        for (let i = 0; i < lastRow.length; i++) {
            if (i < lastRow.length - 1) {
                row.push(lastRow[i] + lastRow[i + 1]);
            } else {
                row.push(1);
            }
        }
        return getRow(row, count+1)
    }
    
    return getRow(root, 0)
};