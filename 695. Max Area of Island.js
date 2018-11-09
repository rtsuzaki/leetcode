var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    const checkIsland = (x, y) => {
        if (x < 0 || x > grid.length - 1 || y < 0 || y > grid[0].length - 1 || grid[x][y] === 0) {
            return 0;
        }
        grid[x][y] = 0;
        return 1 + checkIsland(x - 1, y) + checkIsland(x + 1, y) + checkIsland(x, y - 1) + checkIsland(x, y + 1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let count = checkIsland(i,j);
            if (count > maxArea) {
                maxArea = count;
            }
        }
    }
    return maxArea;
};