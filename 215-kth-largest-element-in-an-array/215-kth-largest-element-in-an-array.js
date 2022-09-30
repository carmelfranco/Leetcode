/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time complexity O(n), space complexity O(1)
var findKthLargest = function(nums, k) {
    k=nums.length-k;
    function quickSelect(l,r){ // Quick Selection Algorithm
        let pivot=nums[r], p=l; // Select the Pivot element as right element, pointer as first element
        for(let i=l;i<r;i++){ // loop from left pointer until right pointer
            if(nums[i]<=pivot){ // if the numbers are lesser, then swap
                [nums[p],nums[i]]=[nums[i],nums[p]];
                p++; // increment the pointer
            }
        }
        [nums[p],nums[r]]=[nums[r],nums[p]];// swap the pivot to the right pointer
        if(p>k){
             return quickSelect(l,p-1); // K is in left partition
        }else if(p<k){
             return quickSelect(p+1,r); // K is in the right partition
           
        }else{// at the center
            return nums[p]; 
        }
    }
    
    return quickSelect(0,nums.length-1);
};