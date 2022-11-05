/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// T- O(n* m * 4^w), S- O(1)
var exist = function(board, word) {
    let rows=board.length, cols = board[0].length;
    let path = new Set();
    const dfs=(r,c,i)=>{
        if(i==word.length){
            return true;
        }
        if(r<0 || c<0 || r>=rows || c >= cols || board[r][c]!=word[i] || path.has(r+"_"+c)){
            return false;
        }
        path.add(r+"_"+c);
        let result=(
            dfs(r+1,c,i+1) ||
            dfs(r-1,c,i+1) ||
            dfs(r,c+1,i+1) ||
            dfs(r,c-1,i+1) 
        );
        path.delete(r+"_"+c);
        return result;
    }
    
    for( let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(dfs(r,c,0)){
                return true;
            }
        }
    }
    
    return false;
};