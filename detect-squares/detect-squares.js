
var DetectSquares = function() {
    this.storageX = {};
    this.storageY = {};
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const x = point[0], y = point[1];
    if (!(x in this.storageX)) {
        this.storageX[x] = {};
    }
    if (!(y in this.storageX[x])) {
        this.storageX[x][y] = 1
    } else {
        this.storageX[x][y]++;
    }
    
    if (!(y in this.storageY)) {
        this.storageY[y] = {};
    }
    if (!(x in this.storageY[y])) {
        this.storageY[y][x] = 1
    } else {
        this.storageY[y][x]++;
    }
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let res = 0, x = point[0], y = point[1];
    if (!( x in this.storageX)) {
        return 0;
    }
    if (point[0] === 1 && point[1] === 9) {

        debugger;
    }
    for (let yCor in this.storageX[x]) {
        if (Number(yCor) !== y) {
            res += this.findSquare(x, yCor, y);

        }
    }
    return res;
};

DetectSquares.prototype.findSquare = function(x, y, originY) {
    let count = 0;
    if (!(y in this.storageY)) {
        return 0;
    }
    let l = Math.abs(y - originY);
    for (let xCor in this.storageY[y])  {
        if (Math.abs(xCor - x) === l && xCor !== x && xCor in this.storageX && this.storageX[xCor][originY] > 0) {
             count += this.storageX[x][y] * this.storageX[xCor][y] * this.storageX[xCor][originY];
        }
    }
    return count;
};


/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */