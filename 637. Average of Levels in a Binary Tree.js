var averageOfLevels = function(root) {
  let output = [];
  let queue = [];
  let currentVals = [];
  let currentLevel = 0;
  if (!root) {
      return [];
  }
  root.level = 0;
  queue.push(root);
  while (queue.length > 0) {
      let currentNode = queue[0];
      if (currentLevel === currentNode.level) {
          currentVals.push(currentNode.val);
      } else if (currentLevel !== currentNode.level) {
          let sum = currentVals.reduce((a, b) => a + b);
          output.push(sum/(currentVals.length));
          currentLevel = currentNode.level;
          currentVals = [currentNode.val];
      }
      if (currentNode.left) {
          currentNode.left.level = currentNode.level + 1;
          queue.push(currentNode.left);
      }
      if (currentNode.right) {
          currentNode.right.level = currentNode.level + 1;
          queue.push(currentNode.right);
      }
      queue.shift();
      if (queue.length === 0) {
          let sum = currentVals.reduce((a, b) => a + b);
          output.push(sum/(currentVals.length));
      }
  }
  
  return output;
};