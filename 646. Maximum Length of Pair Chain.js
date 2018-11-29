var findLongestChain = function(pairs) {
    let longest = 0;
    let sortedPairs = pairs.sort((a,b) => {
        return a[1] - b[1];
    })
    
    const checkFromStart = (startingIndex) => {
        let current = sortedPairs[startingIndex];
        let count = 1;
        for (let i = startingIndex + 1; i < sortedPairs.length; i++) {
            if (sortedPairs[i][0] > current[1]) {
                count++;
                current = sortedPairs[i];
            }
        }
        if (count > longest) {
            longest = count;
        }
    }
    
    for (let i = 0; i < sortedPairs.length; i++) {
        checkFromStart(i);
    }
    return longest;
};