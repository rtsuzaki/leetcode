var kthSmallest = function(root, k) {
    let nums = [];
    
    const traverse = (node) => {
        nums.push(node.val);
        
        if (!node.left && !node.right) {
            return;
        }
        if (node.left) {
            traverse(node.left);
        }
        if (node.right) {
            traverse(node.right);
        }
    }
    traverse(root);
    nums.sort((a,b) => a - b);
    return nums[k-1]
};