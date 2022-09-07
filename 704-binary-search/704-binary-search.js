/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i=0,j=nums.length-1;
    while(i<=j){
        let mid=Math.trunc(i+((j-i)/2));
        if(nums[mid]<target){
            i=mid+1;
        }else if(nums[mid]>target){
            j=mid-1;
        }else{
            return mid;
        }
    }
    
    return -1;
};