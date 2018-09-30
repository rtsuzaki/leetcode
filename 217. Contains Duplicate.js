var containsDuplicate = function(nums) {
    let dict = {};
    let output = false;
    nums.forEach((num) => {
        if (dict[num]) {
            output = true;
            return;
        } else {
            dict[num] = true;
        }
    });
    return output;
};