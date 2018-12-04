var containsNearbyDuplicate = function(nums, k) {
    let numsIndices = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numsIndices[nums[i]]) {
            numsIndices[nums[i]] = [i];
        } else {
            numsIndices[nums[i]].push(i);
        }
    }
    let minDiff = Infinity;
    for (let key in numsIndices) {
        if (numsIndices[key].length > 1) {
            for (let i = 0; i < numsIndices[key].length; i++) {
                for (let j = i + 1; j < numsIndices[key].length; j++) {
                    if ((numsIndices[key][j] - numsIndices[key][i]) < minDiff) {
                        minDiff = numsIndices[key][j] - numsIndices[key][i];
                    }
                }
            }
        }
    }
    if (minDiff <= k) {
        return true;
    }
    return false;
};