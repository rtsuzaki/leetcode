var missingNumber = function(nums) {
  let output = null;
  for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(i) === -1) {
        return i;
      }
  }
  return nums.length;
}
  