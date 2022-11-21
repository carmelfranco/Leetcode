/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// T-  O(n), S- O(1)
var hammingWeight = function(n) {
    let result=0;
    while(n){
        n&=(n-1);
        result++;
    }
    return result;
};