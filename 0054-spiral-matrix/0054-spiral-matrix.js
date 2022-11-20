/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// T- O(m*n), S-O(1)
var spiralOrder = function(matrix) {
    let result=[];
    let [left,right] = [0,matrix[0].length];
    let [top,bottom] = [0, matrix.length];
    while(left<right && top<bottom){
        // # get every i in the top row
        for(let i=left;i<right;i++){
            result.push(matrix[top][i]);
        }
        top++;
        // # get every i in the right col
        for(let i=top;i<bottom;i++){
            result.push(matrix[i][right-1]);
        }
        right--;
        if(!(left<right && top <bottom)){
            break;
        }
        // # get every i in the bottom row
        for(let i=right-1;i>left-1;i--){
            result.push(matrix[bottom-1][i]);
        }
        bottom--;
        // # get every i in the left col
        for(let i=bottom-1;i>top-1;i--){
            result.push(matrix[i][left]);
        }
        left++;
    }
    
    return result;
};