/**
 * @param {number[][]} matrix
 * @return {number}
 */
// T- O(m*n) , S- O(m*n)
var longestIncreasingPath = function(matrix) {
    let ROWS = matrix.length, COLS = matrix[0].length;
    let dp={};// # (r,c) => LIP
    
    function dfs(r,c,prevVal){
        if(r<0 || r==ROWS || c<0 || c==COLS || matrix[r][c]<=prevVal){
            return 0;
        }
        if([r,c] in dp){
            return dp[[r,c]];
        }
        let result=1;
        result = Math.max(result,1+dfs(r+1,c,matrix[r][c]));
        result = Math.max(result,1+dfs(r-1,c,matrix[r][c]));
        result = Math.max(result,1+dfs(r,c+1,matrix[r][c]));
        result = Math.max(result,1+dfs(r,c-1,matrix[r][c]));
        dp[[r,c]] = result;
        return result;
    }
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            dfs(r,c,-1);
        }
    }
    
    return Math.max(...Object.values(dp));
};