/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(s,l,r){
    while(l<r){
        if(s[l]!=s[r]){
            return false;
        }
        l++;
        r--;
    }
    
    return true;
}
// T- O(2^n), S-O(1)
var partition = function(s) {
    let result=[], slate=[];
    const backtracking=(i)=>{
        if(i>=s.length){
            result.push(slate.slice());
            return;
        }
        for(let j=i;j<=s.length;j++){
            if(isPalindrome(s,i,j)){
                slate.push(s.substring(i,j+1));
                backtracking(j+1);
                slate.pop();
            }
        }
    }    
    backtracking(0);
    return result;
};

