/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(nums.length==1){
        return nums;
    }
    let map1= new Map();
    for(var i=0;i<nums.length;i++){
        if(map1.has(nums[i])){
            map1.set(nums[i],map1.get(nums[i])+1);
        }else{
            map1.set(nums[i],1);
        }
    }
    
    map1 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));
    
    var i=0;
    var result=[];
    for (let [key,value] of map1){
        if(i>=k){
            return result;
        }else{
            result.push(key);
            i++;
        }
        
    }
    return result;
};