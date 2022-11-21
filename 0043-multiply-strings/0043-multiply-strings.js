/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// - T 0 O(m*n) , S- O(log (m+n))
var multiply = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let res = Array(len1+len2).fill(0);
    let carry =0;
    let val =0;
    let index =0;
    for(let i=len1-1;i>=0;i--){
        carry=0;
        for(let j=len2-1;j>=0;j--){
            index = len1+len2-2-i-j;
            val = (num1[i] *num2[j])+carry+res[index];
            carry = Math.floor(val/10);
            res[index] = val%10;
        }
        if(carry) res[index+1] = carry;
    }
    while(res.length>1 && res[res.length-1]=="0"){
        res.pop();
    }
    
    return res.reverse().join("");
};