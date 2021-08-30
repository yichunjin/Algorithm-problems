/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image;
    }
    const changeColor = (i, j, n) => {
        if (i < 0 || j < 0 || i >= image.length || j >= image[i].length || image[i][j] !== n) {
            return;
        }
        image[i][j] = newColor;
        changeColor(i + 1, j, n);
        changeColor(i - 1, j, n);
        changeColor(i, j + 1, n);
        changeColor(i, j - 1, n);
    }
    changeColor(sr, sc, image[sr][sc]);
    return image;
};