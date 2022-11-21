/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// T- O(m*n) , S- O(m+n)
var setZeroes = function(matrix) {
    let ROWS= matrix.length, COLS = matrix[0].length;
    let rowBuffer=Array(ROWS).fill(false), colBuffer = Array(COLS).fill(false);    
    for(let i=0;i<ROWS;i++){
        for(let j=0;j<COLS;j++){
            if(matrix[i][j]=="0"){
                rowBuffer[i]=true;
                colBuffer[j]=true;
            }
        }
    }
    for(let i=0;i<ROWS;i++){
        for(let j=0;j<COLS;j++){
            if(rowBuffer[i] || colBuffer[j]){
                matrix[i][j]=0;
            }
        }
    }
};
