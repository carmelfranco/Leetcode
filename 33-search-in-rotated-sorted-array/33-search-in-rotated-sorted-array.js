/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Time Complexity O(n)
/*var search = function(nums, target) {
    let eq=(element)=>(element==target);
    
    return nums.findIndex(eq);
};*/

var search = function(nums, target) {
    let i=0, j=nums.length-1;
    while(i<=j){
        let mid=Math.trunc((i+j)/2);
        if(nums[mid]==target){
            return mid;
        }
        
        if(nums[i]<=nums[mid]){ // Left Portion
            if(target>nums[mid] || target<nums[i]){
                i=mid+1;
            }else{
                j=mid-1;
            }
        }else{ // Right Portion
            if(target<nums[mid] || target>nums[j]){
                j=mid-1;
            }else{
                i=mid+1;
            }
        }
    }
    return -1;
}