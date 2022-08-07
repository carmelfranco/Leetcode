/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map1=new Map();
    
    for(var i=0;i<nums.length;i++){
        var b=target-nums[i];
        
        if(map1.has(b)){
            return [map1.get(b),i];
        }
        map1.set(nums[i],i);
    }
    
    return [-1,-1];
};