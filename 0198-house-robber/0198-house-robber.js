/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1=0, rob2=0;
    // # - [rob1, rob2, n, n+1, ...]
    for(let i=0;i<nums.length;i++){
        let temp = Math.max(nums[i]+rob1,rob2);
        rob1= rob2;
        rob2 = temp;
    }
    return rob2;
};