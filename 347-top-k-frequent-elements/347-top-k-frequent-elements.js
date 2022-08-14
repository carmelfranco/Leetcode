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
    
    for(let i=0;i<nums.length;i++){
        if(map1.has(nums[i])){
            map1.set(nums[i],map1.get(nums[i])+1);
        }else{
            map1.set(nums[i],1);
        }
    }
    
   
   
    let buckets=[];
    
    for(let [key,value] of map1){
        if(buckets[value]){
            buckets[value].push(key);
        }else{
            buckets[value]=[];
            buckets[value].push(key);
        }
    }
   
    var ans=[];
   
    for(let i=buckets.length-1;i>0 && ans.length<k;i--){
        if(buckets[i]!=null){
            for( let j=0;j<buckets[i].length;j++){
                ans.push(buckets[i][j]);
            }
            
        }
        
    }
    
   
    return ans;
};