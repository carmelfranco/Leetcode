/**
 * @param {number[]} digits
 * @return {number[]}
 */
// T- O(1), S- O(1) (Using big Int)
var plusOne = function(digits) {
    let str = digits.join("");
    let n = BigInt(str);
    n++;
    let str1 = n.toString().split("");    
    return str1;
};