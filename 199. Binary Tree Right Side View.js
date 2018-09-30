var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    root.level = 0;
    let queue = [];
    let output = [];
    let currentLevel = 0;
    let currentLevelVals = [];
    queue.push(root);
    while (queue.length > 0) {
        let currentNode = queue[0];
        if (currentNode.level !== currentLevel) {
            output.push(currentLevelVals[currentLevelVals.length - 1]);
            currentLevelVals = [currentNode.val]
            currentLevel = currentNode.level;
        } else if (currentNode.level === currentLevel) {
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
            output.push(currentLevelVals[currentLevelVals.length - 1]);
        }
    }
    return output
};