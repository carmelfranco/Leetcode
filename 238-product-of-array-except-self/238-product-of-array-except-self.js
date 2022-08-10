/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res=Array(nums.length);
   for(let i=0;i<nums.length;i++){
       var temp=1;
       for( let j=0;j<nums.length;j++){
           if(i!=j){
                temp*=nums[j];
           }
          
       }
       res[i]=temp;
   }
    
    return res;
};