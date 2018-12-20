var merge = function(nums1, m, nums2, n) {
    let nums1Pointer = 0;
    let count = 0;    
    while (nums2.length > 0) {
        if (count >= m) {
            nums1[nums1Pointer] = nums2.shift();
            nums1Pointer++;
        } else if (nums1[nums1Pointer] <= nums2[0]) {
            nums1Pointer++;
            count++;
        } else if (nums1[nums1Pointer] > nums2[0]) {
            let insertingNum = nums2.shift();
            nums1.splice(nums1Pointer, 0, insertingNum);
            nums1.pop();
            console.log(nums2, nums1)
            nums1Pointer++;
        }
    }
    return nums1;
};