var intersection = function(nums1, nums2) {
    let output = [];
    let checked = {};
    nums1.forEach((el) => {
        if (nums2.indexOf(el) !== -1 && !checked[el]) {
            checked[el] = true;
            output.push(el);
        }
    })
    return output;
};