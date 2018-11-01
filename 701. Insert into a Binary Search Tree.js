var insertIntoBST = function(root, val) {
    const traverse = (node) => {
      if (val < node.val) {
        if (!node.left) {
            node.left = new TreeNode(val);
            return;
        } else {
            traverse(node.left);
        }  
      } else if (val > node.val) {
        if (!node.right) {
            node.right = new TreeNode(val);
            return;
        } else {
            traverse(node.right);
        }
      }
    }
    traverse(root);
    return root;
};