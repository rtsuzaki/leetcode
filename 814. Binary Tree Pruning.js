var pruneTree = function(root) {
    if (!root) {
        return root;
    }
    const prune = (node, prev, dir) => {
        if (node.left !== null) {
            prune(node.left, node, 'left');
        }
        if (node.right !== null) {
            prune(node.right, node, 'right');
        }
        if (node.left === null && node.right === null) {
            if (node.val === 0) {
                if (dir === 'left') {
                    prev.left = null;
                } else if (dir === 'right') {
                    prev.right = null;
                }
            }
        }
    }
    prune(root, null, null);
    return root;
};