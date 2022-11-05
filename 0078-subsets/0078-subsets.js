/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[],subset=[];
    const dfs=(i)=>{
        if(i>=nums.length){ //Base Case
            let cpy = JSON.parse(JSON.stringify(subset));
            res.push(cpy);
            return;
        }
        // Include nums[i]
        subset.push(nums[i]);
        dfs(i+1);
        //NOT to include nums[i]
        subset.pop();
        dfs(i+1);
    }
    
    dfs(0);
    
    return res;
};