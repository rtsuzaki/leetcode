var leafSimilar = function(root1, root2) {
    let leavesOne = [];
    let leavesTwo = [];
    let traverse = (currentNode, leaves) => {
        if (!currentNode.left && !currentNode.right) {
            leaves.push(currentNode.val)
        } else {
            if (currentNode.left) {
                traverse(currentNode.left, leaves)
            }
            if (currentNode.right) {
                traverse(currentNode.right, leaves)
            }
        }
    }
    traverse(root1, leavesOne);
    traverse(root2, leavesTwo);
    if (leavesOne.join('') === leavesTwo.join('')) {
        return true;
    } else {
        return false
    }
};