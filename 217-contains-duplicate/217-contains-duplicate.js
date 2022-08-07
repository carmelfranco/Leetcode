/* Using Sort and checking next array element which can execute in n Log n  execution speed and space complexity of o(1)*/
var containsDuplicate = function(nums) {
  
   nums.sort(function(a, b){return a - b});
    
    for( var i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            return true;
        }
    }
    return false;
    
   
};
/* Using Map  which Order of execution of O(n) and space complexity of O(n)*/
/*var containsDuplicate = function(nums) {
    const map1= new Map();
    for(var i=0;i<nums.length;i++){
        var b=nums[i];
        if(map1.has(b)){
            return true;
        }
        map1.set(b,i);
    }
    
    return false;
};*/
