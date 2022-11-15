/**
 * @param {string} s
 * @return {string}
 */
// T- O(n^2) , S- O(1)
var longestPalindrome = function(s) {
    let res="", resLen =0;
    for(let i=0;i<s.length;i++){
        // # Odd Length
        let [l,r] = [i,i];
        while(l>=0 && r<s.length && s[l]==s[r]){
            if(r-l+1>resLen){
                res=s.substring(l,r+1);
                resLen = r-l+1;
            }
            l--;
            r++;
        }
        // Even Length 
        [l,r] = [i,i+1];
        while(l>=0 && r<s.length && s[l]== s[r]){
            if(r-l+1>resLen){
                res=s.substring(l,r+1);
                resLen = r-l+1;
            }
            l--;
            r++;
        }
    }
    return res;
};