/**
 * @param {number[]} digits
 * @return {number[]}
 */
// T- O(1), S- O(1) (Using big Int)
/*var plusOne = function(digits) {
    let str = digits.join("");
    let n = BigInt(str);
    n++;
    let str1 = n.toString().split("");    
    return str1;
};*/
// T- O(n), S- O(1)
var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]==9){
            digits[i]=0;
        }else{
            digits[i]++;
            break;
        }
    }
    if(digits[0]==0){
        digits.unshift(1);
    }
    return digits;
}