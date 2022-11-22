/**
 * @param {number} n
 * @return {number[]}
 */
// Using Bitwise operation , T- O(n^2), s- O(1)
var countBits = function(n) {
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
};