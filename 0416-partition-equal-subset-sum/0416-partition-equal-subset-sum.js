/**
 * @param {number[]} nums
 * @return {boolean}
 */
// T- O(n*sum(nums)), S- O(n)
var canPartition = function(nums) {
    let dp = new Set();
    let sum = nums.reduce((a,b)=>a+b,0);
    if(sum%2){ // it is impossible to partition the odd sum of elements
        return false;
    }
    let target = Math.trunc(sum/2);
    dp.add(0);
    for(let i=nums.length;i>=0;i--){
        let nextdp = new Set();
        for(let t of dp){
            if(t+nums[i]==target){
                return true;
            }
            nextdp.add(t+nums[i]);
            nextdp.add(t);
        }
        dp = nextdp;
    }
    return dp.has(target);
};