/**
 * @param {number[]} nums
 * @return {number}
 */
// T- O(n), S- O(1)
var maxProduct = function(nums) {
    let res=Math.max(...nums);
    let [curMax,curMin]=[1,1];
    for(let n of nums){
        let temp = n*curMax;
        curMax=Math.max(n*curMax,n*curMin,n);
        curMin=Math.min(temp,n*curMin,n);
        res = Math.max(res,curMax);
    }
    return res;
};