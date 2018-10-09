var minDepth = function(root) {
  let min = 0;
  const traverse = (node, depth) => {
      if (!node) {
          return;
      }
      if (node.left) {
          traverse(node.left, depth + 1)
      }
      if (node.right) {
          traverse(node.right, depth + 1)
      }
      if (!node.left && !node.right) {
          if (min === 0) {
              min = depth + 1;
          } else if (depth + 1 < min) {
              min = depth + 1;
          }
      }
  }
  
  traverse(root, 0);
  return min;
};