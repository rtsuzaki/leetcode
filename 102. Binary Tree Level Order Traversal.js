var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let queue = [];
    let output = [];
    let currentLevel = 0;
    let currentLevelVals = [];
    root.level = 0;
    queue.push(root);
    while (queue.length > 0) {
        let currentNode = queue[0];
        if (currentLevel !== currentNode.level) {
            output.push(currentLevelVals);
            currentLevelVals = [currentNode.val];
            currentLevel = currentNode.level
        } else if (currentLevel === currentNode.level) {
            currentLevelVals.push(currentNode.val);
        }
        if (currentNode.left) {
            currentNode.left.level = currentNode.level + 1;
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            currentNode.right.level = currentNode.level + 1;
            queue.push(currentNode.right)
        }
        queue.shift();
        if (queue.length === 0) {
            output.push(currentLevelVals)
        }
    }
    return output
};