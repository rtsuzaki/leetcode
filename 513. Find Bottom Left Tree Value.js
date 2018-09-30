var findBottomLeftValue = function(root) {
    let maxLevel = 0;
    let output = root.val;
    let traverse = (currentNode, count) => {
      let newCount = count + 1;
        if (currentNode.left) {
            if (newCount > maxLevel) {
              maxLevel = newCount;
              output = currentNode.left.val; 
            }
        } else if (currentNode.right) {
          if (newCount > maxLevel) {
            maxLevel = newCount;
            output = currentNode.right.val
          }
        }
        
      if (currentNode.left) {
        traverse(currentNode.left, newCount)
      }
      if (currentNode.right) {
        traverse(currentNode.right, newCount)
      }
    }
    traverse(root, 0)
    return output
};