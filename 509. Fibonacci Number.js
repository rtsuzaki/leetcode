var fib = function(N) {
    let nums = [0, 1];
    if (N === 0) {
        return 0;
    }
    if (N === 1) {
        return 1;
    } else {
        while (nums.length < N + 1) {
            nums.push(nums[nums.length - 1] + nums[nums.length - 2])
        }
        console.log(nums)
        return nums[nums.length - 1]
    }
};