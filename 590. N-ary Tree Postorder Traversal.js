var postorder = function(root) {
    if (!root) {
        return [];
    }
    let nums = [];
    const traverse = (node) => {
        if (node.children.length === 0) {
            nums.push(node.val);
            return;
        }
        for (let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
        }
        nums.push(node.val);
        
    }
    traverse(root);
    return nums;
};
