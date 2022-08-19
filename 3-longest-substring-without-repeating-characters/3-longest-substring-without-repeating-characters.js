/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0;
    let set1= new Set();
    let res=0;
    
    for(let j=0;j<s.length;j++){
        while(set1.has(s[j])){
            set1.delete(s[i]);
            i++;
        }
        set1.add(s[j]);
        res=Math.max(res,j-i+1);
    }
    
    return res;
};