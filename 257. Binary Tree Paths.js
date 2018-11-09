var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }
    let paths = [];
    
    const getPath = (currentPath, node) => {
        if (node.left === null && node.right === null) {
            paths.push(currentPath);
            return;
        }
        
        if (node.left) {
            let leftPath = currentPath + '->' + node.left.val;
            getPath(leftPath, node.left);
        }
        if (node.right) {
            let rightPath = currentPath + '->' + node.right.val;
            getPath(rightPath, node.right);
        }
    }
    
    getPath('' + root.val, root);
    return paths;
};