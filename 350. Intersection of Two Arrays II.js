var intersect = function(nums1, nums2) {
    let setOne = {};
    let setTwo = {};
    let output = [];
    nums1.forEach((num) => {
        if (setOne[num]) {
            setOne[num]++;
        } else {
            setOne[num] = 1;
        }
    })
    nums2.forEach((num) => {
        if (setTwo[num]) {
            setTwo[num]++;
        } else {
            setTwo[num] = 1;
        }
    })
    Object.keys(setOne).forEach((key) => {
        if (setOne[key] && setTwo[key]) {
            for (let i = 0; i < Math.min(setOne[key], setTwo[key]); i++) {
                output.push(Number(key));
            }
        }
    })
    return output;
};