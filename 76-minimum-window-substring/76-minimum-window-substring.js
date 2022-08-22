/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length==0){
        return "";
    }
    let countT={}, window={};
    
    for( c of t){
        countT[c]=1+(countT[c]||0);
    }
    
    let need=Object.keys(countT).length, have=0;
    let res=[-1,-1], resLen=Number.MAX_VALUE;
    let l=0;
    for(let r=0;r<s.length;r++){
        let c=s[r];
        window[c] = 1+(window[c] ||0);        
        if(countT[c] && window[c] == countT[c]){
            have++;
        }
        while(have==need){
            //update result, resLen
            if((r-l+1)<resLen){
                res=[l,r];
                resLen=r-l+1;
            }
            // Pop from left side
            window[s[l]]--;
            if(countT[s[l]] && window[s[l]] <countT[s[l]]){
                have--;
            }
            l++;
        }        
    }
    if(resLen!=Number.MAX_VALUE){
        return s.substring(res[0],res[1]+1);
    }
    
    return "";
};