/**
 * @param {number} n
 * @return {boolean}
 */
// S- O(n)
function calc(n){
    let res=0;
    while(n){
        res+=(n%10)*(n%10);
        n = Math.trunc(n/10);
    }
    return res;
}
var isHappy = function(n) {
    let visit= new Set();
    while(!visit.has(n)){
        visit.add(n);
        n=calc(n);
        if(n==1){
            return true;
        }
    }
    return false;
};