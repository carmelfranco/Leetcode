/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   /* const map1= new Map();
    for(var i=0;i<nums.length;i++){
        var b=nums[i];
        if(map1.has(b)){
            return true;
        }
        map1.set(b,i);
    }
    
    return false;*/
    nums.sort(function(a, b){return a - b});
    
    for( var i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            return true;
        }
    }
    return false;
};