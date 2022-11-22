/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// T- O(1), S- O(1)
var getSum = function(a, b) {
    while(b!=0){
        const[xor,carry]=[(a^b),((a&b)<<1)];
        a=xor;
        b=carry;
    }
    return a;
};