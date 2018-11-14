var leastBricks = function(wall) { 
  let maxCount = 0;
  const counts = {}; 
  
  for (let row = 0; row < wall.length; row++) {
      let sum = 0;
      for (let col = 0; col < wall[row].length - 1; col++) {
          sum += wall[row][col];
          counts[sum] = (counts[sum] || 0) + 1;
      }
  }
  
  Object.keys(counts).forEach((key) => {
      maxCount = Math.max(maxCount, counts[key])
  })
  
  return wall.length - maxCount;
};