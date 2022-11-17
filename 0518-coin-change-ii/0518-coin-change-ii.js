/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = Array(coins.length+1).fill().map(()=>Array(amount+1).fill(0));
    
    // Number of ways to fill first coin is 1
    dp[0][0] =1;
    for(let i=1;i<dp.length;i++){
        dp[i][0] = 1;
        for(let j=1;j<dp[0].length;j++){
            dp[i][j] = dp[i-1][j];
            if(coins[i-1]<=j){
                // Subtract the current coin from the current amount
                // Go to the cell in the row at [current amount - current coin]
                // Add the total number of ways in this cell to our current cell
                dp[i][j]+=dp[i][j-coins[i-1]];
            }
        }
    }
    return dp[coins.length][amount];
};