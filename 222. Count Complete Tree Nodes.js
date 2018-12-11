var countNodes = function(root) {
    let count = 0;
    if (!root) {
        return 0;
    }
    const traverse = (node) => {
        count++;
        
        if (!node.left && !node.right) {
            return;
        }
        if (node.left) {
            traverse(node.left)
        }
        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(root);
    return count;
};