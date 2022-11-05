/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result=[];
    candidates.sort();
    const backtrack=(i,subsets,tar)=>{
        if(tar==0){
            result.push(subsets.slice());
            return;
        }
        if(tar<=0){
            return;
        }
        let prev=-1;
        for(let j=i;j<=candidates.length;j++){
            if(candidates[j]==prev){
                continue;
            }
            subsets.push(candidates[j]);
            backtrack(j+1,subsets,tar-candidates[j]);
            subsets.pop();
            prev=candidates[j];
        }
    }
    backtrack(0,[],target);
    return result;
};