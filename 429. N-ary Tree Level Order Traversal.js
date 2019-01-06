var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let output = [];
    let currentRow = [];
    root.level = 0;
    let currentLevel = 0;
    let queue = [root];
    while (queue.length > 0) {
        let currentNode = queue[0];
        if (currentNode.level === currentLevel) {
            currentRow.push(currentNode.val);
        } else {
            output.push(currentRow);
            currentLevel++;
            currentRow = [currentNode.val];
        }
        if(currentNode.children.length > 0) {
            for (let i = 0; i < currentNode.children.length; i++) {
                currentNode.children[i].level = currentNode.level + 1;
                queue.push(currentNode.children[i]);
            }
        }
        queue.shift();
    }
    output.push(currentRow);
    return output;
};