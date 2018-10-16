var findDisappearedNumbers = function(nums) {
  let output = [];
  let flags = new Array(nums.length).fill(false)
  for (let i = 0; i < nums.length; i++) {
      flags[nums[i] - 1] = true;
  }
  for (let i = 0; i < flags.length; i++) {
      if (!flags[i]) {
          output.push(i + 1)
      }
  }
  return output
};