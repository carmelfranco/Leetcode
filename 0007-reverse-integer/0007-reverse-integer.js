/**
 * @param {number} x
 * @return {number}
 */
// Solution 1 - Using String Operatoration
/*var reverse = function(x) {
    const reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
    if(reversed>2**31){
        return 0;
    }
    
    return reversed*Math.sign(x);
};*/

// Solution 2 - Using Integer Division/Mod Operator  T- O(1), S- O(1)
var reverse = function(x) {
    let isNegative=x<0?true:false;
    if(isNegative){
        x=x*-1;
    }
    let reversed=0;
    while(x){
        reversed=(reversed*10)+(x%10);
        x=Math.floor(x/10);
    }
    if(reversed>2**31){
        return 0;
    }
    return isNegative?reversed*-1:reversed;
}