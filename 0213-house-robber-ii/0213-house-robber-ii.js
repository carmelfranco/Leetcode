/**
 * @param {number[]} nums
 * @return {number}
 */
// # T- O(n), S- O(1)
var rob = function(nums) {
    let first = helper(nums.slice(1)), last = helper(nums.slice(0,-1));
    return Math.max(nums[0],first,last);
};
// code of House Robber 1 
function helper(nums){ 
    let rob1=0, rob2=0;
    for(let n of nums){
        let temp = Math.max(rob1+n,rob2);
        rob1 = rob2;
        rob2=temp;
    }
    return rob2;
}