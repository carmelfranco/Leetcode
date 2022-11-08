/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // initialize variables
    let q=[], ROWS = grid.length, COLS = grid[0].length, fresh=0,time=0;
    // find the fresh oranges and then insert rotten Oranges to queue
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            if(grid[r][c]==1){
                fresh++;
            }
            if(grid[r][c]==2){
                q.push({"row":r,"col":c});
            }
        }
    }
    // Traverse through the matrix and update the matrix with newly rotten oranges along with the time
    let directions = [[0,1],[0,-1],[1,0],[-1,0]];
    while(q.length && fresh>0){
        let size=q.length;
        while(size--){
            let obj=q.shift();
            let r=obj.row, c = obj.col;
            for(let [dr,dc] of directions){
                let row = dr+r, col = dc+c;
                if(row<0 || row==ROWS || col<0 || col==COLS || grid[row][col]!=1){
                    continue;
                }
                grid[row][col]=2;
                q.push({"row":row,"col":col});
                fresh--;
            }
        }
        time++;
    }
    if(!fresh){
        return time;
    }
    return -1;
};