/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let set= new Set();
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            const value=board[i][j];
            if(value!="."){
                const row=`${value} at row ${i}`;
                const col=`${value} at col ${j}`;
                const box=`${value} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`;
                
                if(set.has(row) || set.has(col) || set.has(box)){
                    return false;
                }else{
                    set.add(row);
                    set.add(col);
                    set.add(box);
                }
            }
        }
    }
  return true;
};
