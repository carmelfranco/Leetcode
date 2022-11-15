/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// T-O(n) , S- o(n)
var coinChange = function(coins, amount) {
    let dp=Array(amount+1).fill(amount+1);
    dp[0] =0;
    for(let a=1;a<=amount+1;a++){
        for(let c of coins){
            if(a-c>=0){
                dp[a] = Math.min(dp[a],1+dp[a-c]);
            }           
        }
    }
    if(dp[amount]!=amount+1){
        return dp[amount];
    }
    return -1;
};