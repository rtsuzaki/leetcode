var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let vals = [];
    const traverse = (node) => {  
        if (node.left) {
            traverse(node.left);
        }
        
        vals.push(node.val);
        
        if (node.right) {
            traverse(node.right);
        }
        
        
        if (!node.left && !node.right) {
            return;
        }
    }
    traverse(root)
    return vals;
};