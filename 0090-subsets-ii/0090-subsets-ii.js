/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result=[];
    nums.sort();
    const backtrack=(i,subsets)=>{        
        if(i==nums.length){//Base case
            result.push(subsets.slice());
            return;
        }
        // # All subsets that include nums[i]
        subsets.push(nums[i]);
        backtrack(i+1,subsets);
        subsets.pop();
        // # All sub set that does not include nums[i]
        while(i+1<nums.length && nums[i]==nums[i+1]){
            i++;
        }
        backtrack(i+1,subsets);
    }
    backtrack(0,[]);
    return result;
};