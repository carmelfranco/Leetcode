/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1 - By sum and diff
var missingNumber = function(nums) {
    let sum=0;
    for(let i=0;i<=nums.length;i++){
        sum+=i;
    }
    let cur=nums.reduce((a,b)=>a+b,0);
    return sum-cur;
};