var isValidBST = function(node, min = null, max = null) {
  if (!node && min === null && max === null) {
      return true
  }
  if (max !== null && node.val >= max) {
      return false;
  }
  if (min !== null && node.val <= min) {
      return false;
  }
  if (node.left && !isValidBST(node.left, min, node.val)) {
      return false;
  }
  if (node.right && !isValidBST(node.right, node.val, max)) {
      return false
  }
    
  return true;
};