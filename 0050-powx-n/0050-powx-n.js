/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// T- O(n), S- O(n)
function helper(x,n){
    if(x==0){ // Base case 1
        return 0;
    }
    if(n==0){ // Base case 2
        return 1;
    }
    let result = helper(x,Math.trunc(n/2)); // recursive call
    result = result* result;
    return n%2==1?x*result: result; // Power 1 adjustment if n is odd
}
var myPow = function(x, n) {
    let res=helper(x,Math.abs(n));
    return n<0? (1/res) : res;
};