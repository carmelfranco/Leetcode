/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
//Brute Force
/*var minEatingSpeed = function(piles, h) {
   // get Maximum value in the Array 
   let res=Math.max(...piles);
   let max=res;
   // Loop thrrough 1 until we find min eating speed  
   for(let i=1;i<max;i++){
       let hours=0;
       for(p of piles){
           hours+=Math.ceil(p/i);
       }
       if(hours<=h){
        res=Math.min(res,i);    
       }
       
   }
    
    return res;
};*/

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