/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// T- O(n) , S- O(1)
var reverseBits = function(n) {
    let bit=0;
    for(let i=0;i<32;i++){
        bit<<=1;// Double * 2
        bit|=(1&n); // flip
        n>>=1; // reduce 0.5
    }
    return bit>>>0;
};