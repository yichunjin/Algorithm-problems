/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let results = [];
  let pac = new Set();
  let atl = new Set();

  const dfs = (i, j, visit, height) => {
      if (visit.has(i +','+ j) || i < 0 || j < 0 || i >= heights.length || j >= heights[i].length || heights[i][j] < height) {
          return;
      }
      visit.add(i +','+ j);
      dfs(i + 1, j, visit, heights[i][j])
      dfs(i - 1, j, visit, heights[i][j])
      dfs(i, j + 1, visit, heights[i][j])
      dfs(i, j - 1, visit, heights[i][j])
  }

  for (let j = 0; j < heights[0].length; j++) {
      dfs(0, j, pac, heights[0][j])
      dfs(heights.length - 1, j, atl, heights[heights.length - 1][j])
  }

  for (let i = 0; i < heights.length; i++) {
      dfs(i, 0, pac, heights[i][0])
      dfs(i, heights[0].length - 1, atl, heights[i][heights[0].length - 1])
  }

  for (let i = 0; i < heights.length; i++) {
      for (let j = 0; j < heights[i].length; j++) {
          if (pac.has(i +','+ j) && atl.has(i +','+ j)) {
              results.push([i, j]);
          }
      }
  }

  return results;
};