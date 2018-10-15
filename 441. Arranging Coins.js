var arrangeCoins = function(n) {
  let remainingCoins = n;
  let currentRow = 1;
  let output = 0;
  while (remainingCoins >= currentRow) {
      remainingCoins = remainingCoins - currentRow;
      currentRow++;
      if (remainingCoins < currentRow) {
          output = currentRow -1;
      } else if (remainingCoins === currentRow) {
          output = currentRow;
      }
  }
  return output;
};