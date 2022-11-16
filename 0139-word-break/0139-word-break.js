/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// T- O(n*w), S- O(n)
var wordBreak = function(s, wordDict) {
    let dp=Array(s.length+1).fill(false);
    dp[s.length]=true; //  find the last character is true
    for(let i=s.length-1;i>=0;i--){//from the last position, move to the first
        for(let w of wordDict){ // iterate through each word and compare
            if(i+w.length<=s.length && s.substring(i,i+w.length)==w){
                dp[i]=dp[i+w.length]; // Update the DP array
            }
            if(dp[i]){
                break;
            }
        }
    }
    return dp[0]; // the final result is stored in first element
};