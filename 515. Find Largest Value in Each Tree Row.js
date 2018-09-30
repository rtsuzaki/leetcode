var largestValues = function(root) {
    if (!root) {
        return [];
    }
    let queue = [];
    let largest = [];
    let currentLevel = 0;
    let currentMax = root.val;
    root.level = 0;
    queue.push(root);
    while (queue.length > 0) {
        var currentNode = queue[0]
        if (currentNode.level !== currentLevel) {
            largest.push(currentMax)
            currentLevel = currentNode.level;
            currentMax = currentNode.val;
        } else if (currentNode.level === currentLevel) {
            if (currentNode.val > currentMax) {
                currentMax = currentNode.val;
            }
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
            largest.push(currentMax)
        }
    }
    return largest
};