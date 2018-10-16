var invertTree = function(root) {
    let invert = (node) => {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            return;
        }
        let left = node.left;
        let right = node.right;
        node.left = right;
        node.right = left
        if (node.left) {
            invert(node.left)
        }
        if (node.right) {
            invert(node.right)
        }
        
    }
    invert(root)
    return root;
};