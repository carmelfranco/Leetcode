/* Using Sort and checking next array element */
var containsDuplicate = function(nums) {
  
   nums.sort(function(a, b){return a - b});
    
    for( var i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            return true;
        }
    }
    return false;
    
   
};
/* Using Map */
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
