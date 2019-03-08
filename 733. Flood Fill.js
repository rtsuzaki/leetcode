var floodFill = function(image, sr, sc, newColor) {
    if (newColor === image[sr][sc]) {
        return image;
    }
    const target = image[sr][sc];
    const traverse = (row, col) => {
        if (row < 0 || col < 0 || row > image.length - 1 || col > image[0].length - 1 || image[row][col] !== target) {
            return;
        } else {
            image[row][col] = newColor;
            traverse(row - 1, col);
            traverse(row, col + 1);
            traverse(row + 1, col);
            traverse(row, col - 1);
        }
    }
    
    traverse(sr, sc);
    return image;
};