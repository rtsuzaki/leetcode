var singleNumber = function(nums) {
    let output = [];
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) {
          seen[nums[i]]++;
          output.splice(output.indexOf(nums[i]),1);
        } else {
            seen[nums[i]] = 1;
            output.push(nums[i]);
        }
    }
    return output;

};