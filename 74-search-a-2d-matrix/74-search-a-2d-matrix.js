/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time Complexity O(log n), space complexity O(n)
var searchMatrix = function(matrix, target) {
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
};