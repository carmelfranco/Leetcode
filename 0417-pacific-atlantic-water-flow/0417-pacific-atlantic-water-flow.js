/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let ROWS = heights.length, COLS = heights[0].length;
    let alt = new Set(), pac = new Set();
    
    const dfs=(r,c,visit,prevheight)=>{
        if(r<0 || r==ROWS || c<0 || c==COLS || heights[r][c]<prevheight || visit.has(r+"_"+c)){
            return;
        }
        visit.add(r+"_"+c);
        dfs(r+1,c,visit,heights[r][c]);
        dfs(r-1,c,visit,heights[r][c]);
        dfs(r,c+1,visit,heights[r][c]);
        dfs(r,c-1,visit,heights[r][c]);
    }
    
    // Iterate through the Top Row and Bottom row  and update pac, alt sets
    for(let c=0;c<COLS;c++){
        dfs(0,c,pac,heights[0][c]);
        dfs(ROWS-1,c,alt,heights[ROWS-1][c]);
    }
    // Iterate through the Left Col and Right Col  and update pac, alt sets
    for(let r=0;r<ROWS;r++){
        dfs(r,0,pac,heights[r][0]);
        dfs(r,COLS-1,alt,heights[r][COLS-1]);
    }
    let result=[];
    // find the cells that are both in alt, pac Sets and update them into result
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            if(pac.has(r+"_"+c) && alt.has(r+"_"+c)){
                result.push([r,c]);
            }
        }
    }
    return result;    
};