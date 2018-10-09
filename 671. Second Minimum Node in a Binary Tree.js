var findSecondMinimumValue = function(root) {
  let vals = {};
  const traverse = (node) => {
      if (!node) {
          return;
      }
      if (node.left) {
          traverse(node.left)
      }
      if (node.right) {
          traverse(node.right)
      }
      if (!node.left && !node.right) {
          vals[node.val] = 1;
      }
  }
  
  traverse(root);
  const uniqVals = [];
  Object.keys((vals)).forEach((val) => {
      uniqVals.push(Number(val))
  })
  if (uniqVals.length < 2) {
      return -1;
  }
  uniqVals.sort((a,b) => a-b)
  return uniqVals[1]
};