var constructMaximumBinaryTree = function(nums) {
    const getMaxIndex = (beg, end, array) => {
        let maxIndex = beg;
        for (let i = beg + 1; i < end; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            } 
        }
        return maxIndex;
    }
    
    const makeTree = (beg, end, array) => {
        if (beg >= end) {
            return null;
        }
        
        let maxIndex = getMaxIndex(beg, end, array);
        
        let root = new TreeNode(array[maxIndex]);
        root.left = makeTree(beg, maxIndex, array);
        root.right = makeTree(maxIndex + 1, end, array);
        return root;
    }
    
    return makeTree(0, nums.length, nums)
};