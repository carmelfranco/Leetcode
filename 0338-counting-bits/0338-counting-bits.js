/**
 * @param {number} n
 * @return {number[]}
 */
// Using Bitwise operation , T- O(n^2), s- O(1)
/*var countBits = function(n) {
    let res=[];
    for(let i=0;i<=n;i++){
        let j=i;
        let count=0;
        while(j){
            j&=(j-1);
            count++;
        }
        res.push(count);
    }
    return res;
};*/

// Using DP , T- O(n), s- O(1)
var countBits = function(n) {
    let dp=Array(n+1).fill(0);
    let offset=1;
    for(let i=1;i<=n;i++){
        if(offset*2==i){
            offset=i;
        }
        dp[i]=1+dp[i-offset];
    }
    return dp;
};