/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time Complexity O(log n), space complexity O(n*m)
/*var searchMatrix = function(matrix, target) {
    let temp=matrix.join(",").split(",");
    let i=0, j=temp.length-1;
    while(i<=j){
        let mid=Math.trunc(i+((j-i)/2));
        if(temp[mid]>target){
            j=mid-1;
        }else if(temp[mid]<target){
            i=mid+1;
        }else{
            return true;
        }
    }
    return false;
};*/
// Time Complexity O(log n+log m), Space complexity O(1)
var searchMatrix = function(matrix, target) {
    let left=0, right=matrix[0].length-1;
    let top=0, bot=matrix.length-1;
    
    while(top<=bot){
        let row=Math.trunc((top+bot)/2);
        if(target<matrix[row][0]){
            bot=row-1;
        }else if(target>matrix[row][right]){
            top=row+1;
        }else{
            break;
        }
    }
    
    if(top>bot){
        return false;
    }
    let row=Math.trunc((top+bot)/2);
    while(left<=right){
        let mid=Math.trunc((left+right)/2);
        if(target<matrix[row][mid]){
            right=mid-1;
        }else if(target>matrix[row][mid]){
            left=mid+1;
        }else{
            return true;
        }
    }
    
    return false;
}