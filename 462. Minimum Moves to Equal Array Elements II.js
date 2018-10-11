var minMoves2 = function(nums) {
  let moves = 0;
  let sortedArr = nums.sort((a,b) => a-b)
  const middle = sortedArr[Math.floor(sortedArr.length/2)]
  for (let i = 0; i < sortedArr.length; i++) {
      moves = moves + Math.abs(sortedArr[i]-middle)
  }
  return moves
};