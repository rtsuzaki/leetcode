var topKFrequent = function(nums, k) {
    let output = [];
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        if (!counts[nums[i]]) {
            counts[nums[i]] = 1;
        } else {
            counts[nums[i]]++;
        }
    }
    while (output.length < k) {
        let max = null;
        let keyOfMax = null;
        for (let key in counts) {
            if (max === null || counts[key] > max) {
                max = counts[key];
                keyOfMax = Number(key);
            }
        }
        output.push(keyOfMax);
        delete counts[keyOfMax];
    }
    
    return output;
};