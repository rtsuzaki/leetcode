var removeDuplicates = function(nums) {
  let current = null;
  for (let i = 0; i < nums.length; i++) {
      if (current !== nums[i]) {
          current = nums[i];
          var count = 1;
      } else if (count === 2) {
          nums.splice(i, 1)
          i--;
      } else {
          count++;
      }
  }
  return nums.length;
}
