/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* Solution 1 - Time complexity O(n)**2 Space complexity O(1)
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
};*/

/* Solution 2 -Time Complexity O(n) Space complexity 2*O(n)
var productExceptSelf = function(nums) {
   let res=Array(nums.length);
   let prefix=Array(nums.length).fill(1);
   let postfix=Array(nums.length).fill(1);
   prefix[0]=nums[0];
   for(let i=1;i<nums.length;i++){
       prefix[i]=prefix[i-1]*nums[i];
   }
   
   postfix[nums.length-1]=nums[nums.length-1];
   for(let i=nums.length-1;i>=1;i--){
       postfix[i-1]=postfix[i]*nums[i-1];
   }
   
   res[0]=1*postfix[1];
   for(let i=1;i<nums.length-1;i++){
       res[i]=prefix[i-1]*postfix[i+1];
   }
   res[nums.length-1] = prefix[nums.length-2];
    return res;
};*/


/* Solution 3 -Time Complexity O(n) Space complexity O(1)*/
var productExceptSelf = function(nums) {
   let res=Array(nums.length).fill(1);
   let prefix=1;
   let postfix=1;
   
   for(let i=0;i<nums.length;i++){
      res[i]= prefix;
      prefix*=nums[i];
   } 
   for(let i=nums.length-1;i>=0;i--){
       res[i]*=postfix;
       postfix*=nums[i];
       
   }  
   return res;
};

