var arrayPairSum = function(nums) {
    let sortedNums = nums.sort(function(a,b) { return a - b; })
    console.log(sortedNums)
    let sum = 0;
    for (let i = 0; i < sortedNums.length; i += 2) {
        sum += Math.min(sortedNums[i], sortedNums[i+1]);
    }
    return sum
};