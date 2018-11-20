var rangeSumBST = function(root, L, R) {
    
    let sum = 0;
    
    const traverse = (node) => {
        if (!node) {
            return;
        } else {
            if (node.val >= L && node.val <= R) {       
                sum += node.val
            }
            traverse(node.left)
            traverse(node.right)
        }
    }
    
    traverse(root, 0);
    return sum
};