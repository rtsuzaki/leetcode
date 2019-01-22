var preorder = function(root) {
    if (!root) {
        return [];
    }
    let nums = [];
    
    const traverse = (node) => {
        nums.push(node.val);
        if (node.children.length === 0) {
            return;
        } else {
            for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }
        }
    }
    traverse(root);
    return nums;
};