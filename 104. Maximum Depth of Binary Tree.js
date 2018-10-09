var maxDepth = function(root) {
  let max = 0;
  const traverse = (node, depth) => {
      if (!node) {
          return;
      }
      if (!node.left && !node.right) {
          if (depth + 1 > max) {
              max = depth + 1;
          }
      }
      if (node.left) {
          traverse(node.left, depth + 1)
      }
      if (node.right) {
          traverse(node.right, depth + 1)
      }
  }
  traverse(root,0)
  return max;
};