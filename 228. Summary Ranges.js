var summaryRanges = function(nums) {
  let result = [];
  let index = 1;
  let visited = [nums[0]];
  while (index <= nums.length) {
      if (nums[index] === nums[index - 1] + 1) {
          visited.push(nums[index])
          index++;
          console.log(visited)
      } else {
          if (visited.length === 1) {
              result.push(visited[0].toString())
          } else {
              result.push('' + visited[0] + '->' + visited[visited.length-1])
          }
          visited = [nums[index]];
          index++;
      }
  }
  
  return result;
};