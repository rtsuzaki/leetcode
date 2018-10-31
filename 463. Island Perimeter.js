var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                if (row - 1 < 0) {
                    perimeter++;
                } else if (grid[row - 1][col] !== 1) {
                    perimeter++;
                }
                if (row + 1 > grid.length - 1) {
                    perimeter++;
                } else if (grid[row + 1][col] !== 1) {
                    perimeter++;
                }
                if (col - 1 < 0) {
                    perimeter++;
                } else if (grid[row][col - 1] !== 1) {
                    perimeter++;
                }
                if (col + 1 > grid[0].length - 1) {
                    perimeter++;
                } else if (grid[row][col + 1] !== 1) {
                    perimeter++;
                }      
            }
        }
    }
    return perimeter
};