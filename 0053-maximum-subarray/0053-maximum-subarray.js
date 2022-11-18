/**
 * @param {number[]} nums
 * @return {number}
 */
// T- O(n), S- O(1)
var maxSubArray = function(nums) {
    let curSum =0;
    let maxSub=nums[0];
    for(let n of nums){
        if(curSum<0){
            curSum=0;
        }
        curSum+=n;
        maxSub = Math.max(maxSub,curSum);
    }
    return maxSub;
};