var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let maxLevel = 0;
    const traverse = (node, currLevel) => {
        if (currLevel > maxLevel) {
            maxLevel = currLevel;
        }
        
        if (node.children.length === 0) {
            return;
        } else {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i], currLevel + 1);
            }
        }
    }
    traverse(root, 1);
    return maxLevel;
};