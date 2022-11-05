/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result=[];
    const dfs=(i,slate,total)=>{
        if(total==target){
            result.push(JSON.parse(JSON.stringify(slate)));
            return;
        }
        if(i>=candidates.length || total>target){
            return;
        }        
        // include the candidate
        slate.push(candidates[i]);
        dfs(i,slate,total+candidates[i]);
        //Exclude the candidate
        slate.pop();
        dfs(i+1,slate,total);
    }
    
    dfs(0,[],0);
    return result;
    
};