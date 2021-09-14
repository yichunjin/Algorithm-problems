/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const result = [];
    const visited = new Set(), cycle = new Set();
    const preCourse = {};
    
    for (let p of prerequisites) {
        if (!(p[0] in preCourse)) {
            preCourse[p[0]] = [];
        }
        preCourse[p[0]].push(p[1]);
    }
    
    const checkVisit = (course) => {
        if (cycle.has(course)) {
            return false;
        }
        if (visited.has(course)) {
            return true;
        }
        if (course in preCourse) {
            cycle.add(course);
            for (let c of preCourse[course]) {
                if (!checkVisit(c)) {
                    return false;
                }
            }
            cycle.delete(course);
        }
        visited.add(course);
        result.push(course);
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (i in preCourse) {
            if (!checkVisit(i)) {
                return [];
            }
        } else if (!visited.has(i)){
            result.push(i);
            visited.add(i);
        }
    }
    
    return result;
};