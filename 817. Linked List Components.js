var numComponents = function(head, G) {
  let countOfConnected = 0;
  const traverse = (node, connecting) => {
      let willConnect = false;
      if (!node) {
          return;
      }
      if (G.indexOf(node.val) !== -1) {
          if (!connecting) {
              countOfConnected++;
          }
          willConnect = true;
      }
      if (node.next) {
          traverse(node.next, willConnect)
      }
      
  }
  traverse(head, false)
  return countOfConnected;
};