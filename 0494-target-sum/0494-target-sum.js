/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// T- O(n), S- O(n)
var findTargetSumWays = function(nums, target) {
    let dp={};
    function backtrack(i,total){        
        if(i==nums.length){
            if(total==target){
                return 1;
            }
            return 0;
        }
        if([i,total] in dp){
            return dp[[i,total]];
        }
        dp[[i,total]] = backtrack(i+1,total+nums[i]) +backtrack(i+1,total-nums[i]);                         
        return dp[[i,total]];
    }
    return backtrack(0,0);
};