/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites.length === 0) {
        return true;
    }
    let preMap = {};
    for (let i = 0; i < numCourses; i++) {
        preMap[i] = [];
    }
    for (let i of prerequisites) {
        preMap[i[0]].push(i[1]);
    }
    let visited = new Set();
    const checkVisit = (course) => {
        if (visited.has(course)) {
            return false;
        }
        if (preMap[course].length === 0) {
            return true;
        }
        visited.add(course);
        for (let i of preMap[course]) {
            if (!checkVisit(i)) {
                return false;
            }
        }
        preMap[course] = [];
        visited.delete(course);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!checkVisit(i)) {
            return false;
        }
    }
    return true;
};