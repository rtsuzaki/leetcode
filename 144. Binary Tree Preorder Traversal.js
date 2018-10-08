var preorderTraversal = function(root) {
  const output = [];
  let traverse = (node) => {
      if (!node) {
          return
      }
      
      output.push(node.val)
      
      if (node.left) {
          traverse(node.left)
      }
      
      if (node.right) {
          traverse(node.right)
      }
  }
  traverse(root);
  return output;
};