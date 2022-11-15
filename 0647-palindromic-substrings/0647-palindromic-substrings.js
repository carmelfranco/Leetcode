/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res=0;
    for(let i=0;i<s.length;i++){
        // # String length is Odd Number
        res+= countPalindrome(s,i,i);
        // # String Length is Even Number
        res+=countPalindrome(s,i,i+1);
    }
    return res;
};

function countPalindrome(s,l,r){
    let res=0;
    while(l>=0 && r<s.length && s[l]==s[r]){
        res++;
        l--;
        r++;
    }
    return res;
} 