var maxIncreaseKeepingSkyline = function(grid) {
    let increases = 0;
    let maxRows = {};
    let maxCols = {};
    for (let i = 0; i < grid[0].length; i++) {
        maxCols[i] = grid[0][i];
        for (let j = 0; j < grid.length; j++) {
            maxCols[i] = Math.max(maxCols[i], grid[j][i])
            maxRows[j] = Math.max(...grid[j])
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            increases += Math.min(maxRows[i] - grid[i][j], maxCols[j] - grid[i][j]);
        }
    }
    return increases;
};