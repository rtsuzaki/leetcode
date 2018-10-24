var findKthLargest = function(nums, k) {
  let sorted = nums.sort((a, b) => b - a);
  return nums[k - 1]
};