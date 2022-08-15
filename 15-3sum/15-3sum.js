/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums=nums.sort((a,b)=>(a-b));
    var result=[];
    
    for(let ind=0;ind<nums.length;ind++){
        if(ind>0 && nums[ind]==nums[ind-1]){
            continue;
        }
        let i=ind+1;
        let j=nums.length-1;
        while(i<j){
            let sum=nums[ind]+nums[i]+nums[j];
            
            if(sum>0){
                j--;
            }else if(sum<0){
                i++
            }else{
                result.push([nums[ind],nums[i],nums[j]]);
                i++;
                while(nums[i]==nums[i-1] && i<j){
                    i++;
                }
            }
        }
    }
    
    return result;
};