
var FileSystem = function() {
    this.root = new Dir();
};

var Dir = function() {
    this.dirs = {};
    this.files = {};
}

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    let t = this.root;
    const files = [];
    if (path !== "/") {
        let d = path.split("/");
        for (let i = 1; i < d.length - 1; i++) {
            t = t.dirs[d[i]];
        }
        if (d[d.length - 1] in t.files) {
            files.push(d[d.length - 1]);
            return files;
        } else {
            t = t.dirs[d[d.length - 1]];
        }
    }
    files.push(...Object.keys(t.dirs));
    files.push(...Object.keys(t.files));
    files.sort();
    return files;
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    let t = this.root;
    let d = path.split("/");
    for (let i = 1; i < d.length; i++) {
        if (!(d[i] in t.dirs)) {
            t.dirs[d[i]] = new Dir();
        }
        t = t.dirs[d[i]];
    }
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    let t = this.root, d = filePath.split("/");
    for (let i = 1; i < d.length - 1; i++) {
        t = t.dirs[d[i]]
    }
    t.files[d[d.length - 1]] = t.files[d[d.length - 1]] ? t.files[d[d.length - 1]] + content : content;
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    let t = this.root, d = filePath.split("/");
    for (let i = 1; i < d.length - 1; i++) {
        t = t.dirs[d[i]]
    }
    return t.files[d[d.length - 1]];
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */