/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
    let res = -Infinity;
    const q = [];
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        while (q.length > 0 && point[0] - q[0][1] > k) {
            q.shift();
        }
        if (q.length > 0) {
            res = Math.max(res, q[0][0] + point[0] + point[1])
        }
        while (q.length > 0 && point[1] - point[0] > q[q.length - 1][0]) {
            q.pop();
        }
        q.push([point[1] - point[0], point[0]]);
    }
    return res;
};


//    public int findMaxValueOfEquation(int[][] points, int k) {
//         Deque<Pair<Integer, Integer>> ms = new ArrayDeque<>();
//         int res = Integer.MIN_VALUE;
//         for (int[] point : points) {
//             while (!ms.isEmpty() && point[0] - ms.peekFirst().getValue() > k) {
//                 ms.pollFirst();
//             }
//             if (!ms.isEmpty()) {
//                 res = Math.max(res, ms.peekFirst().getKey() + point[0] + point[1]);
//             }
//             while (!ms.isEmpty() && point[1] - point[0] > ms.peekLast().getKey()) {
//                 ms.pollLast();
//             }
//             ms.offerLast(new Pair<>(point[1] - point[0], point[0]));
//         }
//         return res;
//     }