var isToeplitzMatrix = function(matrix) {
  let output = true;
  const checkDiag = (row, col) => {
      let initial = matrix[row][col];
      while (row < matrix.length && col < matrix[0].length) {
          if (matrix[row][col] !== initial) {
              output = false;
              return;
          }
          row++;
          col++;
      }
  }
  for (let i = 0; i < matrix[0].length; i++) {
      checkDiag(0, i)
  }
  for (let j = 1; j< matrix.length; j++) {
      checkDiag(j,0)
  }
  return output;
  
};