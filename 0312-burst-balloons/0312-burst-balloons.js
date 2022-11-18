/**
 * @param {number[]} nums
 * @return {number}
 */
// T- O(n^3), S- O(n^2)
var maxCoins = function(nums) {
    nums.push(1);
    nums.unshift(1);
    let dp = Array(nums.length).fill().map(()=>Array(nums.length).fill(0));
    for(let i=nums.length-3;i>=0;i--){
        for(let j=i+2;j<nums.length;j++){
            for(let k=i+1;k<j;k++){
                dp[i][j] = Math.max(dp[i][j],dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j]);
            }
        }
    }
    
    return dp[0][nums.length-1];
};