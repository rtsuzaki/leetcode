var minSteps = function(n) {
    let minCount = Infinity;
    
    const copyPaste = (copiedVal, currentVal, moveCount) => {
        console.log(copiedVal, currentVal, moveCount)
        if (currentVal > n || moveCount > n || moveCount > minCount) {
            return;
        } else if (currentVal === n) {
            if (moveCount < minCount) {
                minCount = moveCount;
            }
            return;
        } else {
            if (copiedVal < currentVal && (n - currentVal) % currentVal === 0) {
                copyPaste(currentVal, currentVal, moveCount + 1);
            } else {
                copyPaste(copiedVal, currentVal + copiedVal, moveCount + 1);
            }
        }
    }
    
    copyPaste(0, 1, 0);
    return minCount;
};