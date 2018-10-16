var levelOrderBottom = function(root) {
    let result = [];
    const traverse = (node, index) => {
        if (!node) {
            return;
        }
        if (index >= result.length) {
            result.push([]);
        }
        
        result[index].push(node.val);
        if (node.left) {
            traverse(node.left, index + 1);
        }
        if (node.right) {
            traverse(node.right, index + 1);
        }
    }
    
    
    
    traverse(root, 0);
    return result.reverse();
};