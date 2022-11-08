/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//T- O(m*n), S-O(1)
var solve = function(board) {
    let ROWS=board.length, COLS = board[0].length;
    let visit = new Set();
    const dfs=(r,c)=>{
        if(r<0 || r>=ROWS || c<0 || c>= COLS || board[r][c]!="O"){
            return;
        }
        board[r][c]="T";
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    }
    //#1 Traverse the top and bottom row and check for O then change it to T
    for(let c=0;c<COLS;c++){
        dfs(0,c);
        dfs(ROWS-1,c);
    }
    //#2 Traverse the Left and right columns and check for O then change it to T
    for(let r=0;r<ROWS;r++){
        dfs(r,0);
        dfs(r,COLS-1);
    }
    //#3 Update the inner cell elements with O and change it to X
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            if(board[r][c]=="O"){
                board[r][c]="X";
            }
        }
    }
    //#4 revert back changes done by 1 , 2 back to O
    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            if(board[r][c]=="T"){
                board[r][c]="O";
            }
        }
    }
    
};