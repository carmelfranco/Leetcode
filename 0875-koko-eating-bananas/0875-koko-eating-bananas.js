/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// T- O(Log Map(p) * p), S - O(1)
var minEatingSpeed = function(piles, h) {
    let i=1, j=Math.max(...piles);
    let res=j;
    while(i<=j){
        let k=Math.trunc((i+j)/2);
        let hours=0;
        for(p of piles){
            hours+=Math.ceil(p/k);
        }
        if(hours<=h){
            res=Math.min(res,k);
            j=k-1;
        }else{
            i=k+1;
        }
    }
    return res;
}