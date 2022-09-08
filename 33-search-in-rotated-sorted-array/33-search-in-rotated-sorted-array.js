/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let eq=(element)=>(element==target);
    
    return nums.findIndex(eq);
};