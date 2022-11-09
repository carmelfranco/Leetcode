/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Using Map, T-O(n), S-O(n)
var twoSum = function(nums, target) {
    let map1 = new Map();
    for(let i=0;i<nums.length;i++){
        let b=target-nums[i];
        if(map1.has(b)){
            return [i,map1.get(b)];
        }
        map1.set(nums[i],i);
    }
    return [-1,-1];
};