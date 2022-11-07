/**
 * @param {number[][]} grid
 * @return {number}
 */
//- T-O(m*n), S-O(n)
var maxAreaOfIsland = function(grid) {
    let ROWS=grid.length, COLS=grid[0].length;
    let visit = new Set(), maxarea=0;
    
    const dfs=(r,c)=>{
        if(r<0 || r==ROWS || c<0 || c==COLS || grid[r][c]==0|| visit.has(r+"_"+c)){
            return 0;
        }
        
        visit.add(r+"_"+c);
        return(1+
                dfs(r+1,c)+
                dfs(r-1,c)+
                dfs(r,c+1)+
                dfs(r,c-1)
              );
    }    
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            maxarea=Math.max(maxarea,dfs(r,c));
        }
    }    
    return maxarea;
};