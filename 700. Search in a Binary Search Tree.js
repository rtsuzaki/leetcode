var searchBST = function(root, val) {
    output = null;
    const traverse = (node) => {
        if (node.val === val) {
            output = node;
        }
        if (!node.left && !node.right) {
            return
        }
        if (node.left) {
            traverse(node.left)
        }
        if (node.right) {
            traverse(node.right)
        }
    }
    traverse(root);
    return output;
};