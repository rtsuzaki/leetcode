var hasPathSum = function(root, sum) {
  let output = false;
  const traverse = (node, currentSum) => {
      if (!node) {
          return;
      }
      if (node.left) {
          traverse(node.left, currentSum + node.val)
      }
      if (node.right) {
          traverse(node.right, currentSum + node.val)
      }
      if (!node.left && !node.right) {
          if (currentSum + node.val === sum) {
              output = true;
          }
      }
  }
  traverse(root, 0);
  return output;
};