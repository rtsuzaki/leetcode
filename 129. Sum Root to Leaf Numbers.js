var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let nums = [];
    const traverse = (node, path) => {
        path+=node.val;
        
        if (!node.left && !node.right) {
            nums.push(Number(path))
            return;
        }
        if (node.left) {
            traverse(node.left, path)
        }
        if (node.right) {
            traverse(node.right, path);
        }
    }
    traverse(root, '');
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
};