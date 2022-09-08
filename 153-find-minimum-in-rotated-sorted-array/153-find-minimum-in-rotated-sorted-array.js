/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute force
/*var findMin = function(nums) {
    return Math.min(...nums);
};*/

//Using Binary Search
var findMin = function(nums) {
    let i=0, j=nums.length-1;
    let res=nums[0];
    
    while(i<=j){
        if(nums[i]<nums[j]){
            res=Math.min(res,nums[i]);
        }
        let mid=Math.trunc((i+j)/2);
        res=Math.min(res,nums[mid]);
        if(nums[i]<=nums[mid]){
            i=mid+1;
        }else{
            j=mid-1;
        }
    }
    
    return res;
};