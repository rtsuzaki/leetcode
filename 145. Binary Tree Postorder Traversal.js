var postorderTraversal = function(root) {
  const output = [];
  const traverse = (node) => {
      if (!node) {
          return;
      }
      if (node.left) {
          traverse(node.left);
      }
      if (node.right) {
          traverse(node.right);
      }
      output.push(node.val)
  }
  traverse(root);
  return output;
};