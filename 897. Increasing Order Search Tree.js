var increasingBST = function(root) {
    let vals = [];
    const traverse = (node) => {
        if (node.left) {
            traverse(node.left)
        }  
        vals.push(node.val);   
        if (node.right) {
            traverse(node.right)
        }        
        if (!node.left && !node.right) {
            return;
        }
    }
    traverse(root);
    let start = new TreeNode(null);
    let current = start;
    for (let i = 0; i < vals.length -1; i++) {
        current.val = vals[i]
        current.right = new TreeNode(null);
        current = current.right;
    }
    current.val = vals[vals.length - 1]
    return start;
};