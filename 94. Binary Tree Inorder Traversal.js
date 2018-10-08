const inorderTraversal = function(root) {
  const output = [];
  const traverse = (node) => {
      if (!node) {
          return;
      }
      if (node.left) {
          traverse(node.left)
      }
      
      output.push(node.val)
      
      if (node.right) {
          traverse(node.right)
      }
  }
  traverse(root);
  return output;
};