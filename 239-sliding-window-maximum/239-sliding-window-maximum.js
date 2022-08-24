/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* Time Complexity O(n * k) , space complexity O(1)
var maxSlidingWindow = function(nums, k) {
    let result=[];
    for(let i=0;i<nums.length-k+1;i++){
        let max=-10000;
        for(let j=i;j<i+k;j++){
            max=Math.max(max,nums[j]);
        }
        
        result.push(max);
    }
    
    return result;
};*/
/* Time Complexity O(n), space complexity O(n) */
var maxSlidingWindow = function(nums, k) {
    let l=0, r=0;
    let q=[], output=[];
    
    while(r<nums.length){
        while(q.length && nums[q[q.length-1]]<nums[r]){
            q.pop();
        }
        q.push(r);
        
        if(l>q[0]){
            q.shift();
        }
        if(r+1>=k){
            output.push(nums[q[0]]);
            l++;
        }
        r++;
    }
    
    return output;
}