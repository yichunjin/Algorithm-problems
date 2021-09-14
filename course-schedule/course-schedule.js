/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        return true;
    }
    
    const visited = new Set();
    const preCourse = new Array(numCourses).fill(null).map((a) => new Array);
    
    for (let p of prerequisites) {
        preCourse[p[0]].push(p[1]);
    }
    
    const dfs = (course) => {
        if (visited.has(course)) {
            return false;
        }
        if (preCourse[course].length === 0) {
            return true;
        }
        visited.add(course);
        for (let c of preCourse[course]) {
            if (!dfs(c)) {
                return false;   
            }
        }
        preCourse[course] = [];
        visited.delete(course);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
           if (!dfs(i)) {
               return false;
           }
    }

    return true;
};