/**
 * @param {number[]} nums
 * @return {number}
 */
// T- O(n) , S- O(1)
var jump = function(nums) {
    let [newMax,oldMax,jump]=[0,0,0];
    for(let i=0;i<nums.length-1;i++){
        // Keep track of Farthest Jump
        newMax = Math.max(newMax,i+nums[i]);
        // when we get to the index where we had our previous farthese jump, we increase our jump count by 1
        if(i==oldMax){
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};