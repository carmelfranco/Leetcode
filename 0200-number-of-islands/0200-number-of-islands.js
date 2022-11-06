/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid){
        return 0;
    }
    let visit= new Set();
    let rows=grid.length;
    let cols = grid[0].length;
    let islands =0;
    const BFS=(r,c)=>{
        let q=[];
        visit.add(r+"_"+c);
        q.push({"row":r,"col":c});
        while(q.length){
            let obj=q.shift();
            let row=obj.row, col = obj.col;
            let directions=[[1,0],[-1,0],[0,1],[0,-1]];
            for(let[dr,dc] of directions){
                r=row+dr;
                c=col+dc;
                if(r>=0 && r<rows && c>=0 && c<cols && grid[r][c]=="1" && !visit.has(r+"_"+c)){
                    q.push({"row":r,"col":c});
                    visit.add(r+"_"+c);
                }
            }
        }
    }
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c]=="1" && !visit.has(r+"_"+c)){
                BFS(r,c);
                islands++;
            }
        }
    }
    return islands;
};