/**
 * @param {number} n
 * @return {string[][]}
 */
// T- O(n^2), S- O(n)
var solveNQueens = function(n) {
    let col = new Set();
    let posDiag = new Set();// (r+c)
    let negDiag = new Set();// (r-c)
    let result=[];
    let board = Array(n).fill().map(()=>Array(n).fill("."));
    const backtrack=(r)=>{
        if(r==n){
            let cpy =[];
            for(let tr=0;tr<board.length;tr++){
                cpy.push(board[tr].join(""));
            }
            result.push(cpy);
            return;
        }        
        for(let c=0;c<n;c++){
            if(col.has(c) || posDiag.has(r+c) || negDiag.has(r-c)){
                continue;
            }
            col.add(c);
            posDiag.add(r+c);
            negDiag.add(r-c);
            board[r][c] = "Q";
            
            backtrack(r+1);
            
            col.delete(c);
            posDiag.delete(r+c);
            negDiag.delete(r-c);
            board[r][c] = ".";
        }
    }
    
    backtrack(0);
    return result;
    
};