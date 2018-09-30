var nextGreaterElement = function(findNums, nums) {
  let output = [];
  findNums.forEach((num) => {
      let index = nums.indexOf(num)
      let found = false;
      for (let i = index; i < nums.length; i++) {
          if (nums[i] > num && !found) {
              output.push(nums[i]);
              found = true;
          } else if (!found && i === nums.length - 1) {
              output.push(-1);
          }
      }
  })
  return output;
};