/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let res = 0;
    let map = {};
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        map[employee.id] = employee.importance;
    }
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        if (employee.id === id) {
            res += employee.importance;
            for (let s of employee.subordinates) {
                res += GetImportance(employees, s);
            }
        }
    }
    return res;
};