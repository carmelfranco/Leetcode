/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/* Time Complexity O(n*m) , space complexity O(n) 
const equals=(a,b)=> JSON.stringify(a)===JSON.stringify(b);

var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length){
        return false;
    }
    let alphabet=Array(26).fill(0);
    
    for(let i=0;i<s1.length;i++){
        alphabet[s1[i].charCodeAt()-97]++;
    }
    
    for(let j=0;j<s2.length-s1.length+1;j++){
        let tstr=s2.substring(j,j+s1.length);
        let window=Array(26).fill(0);
        for(let k=0;k<tstr.length;k++){
            window[tstr[k].charCodeAt()-97]++;
        }
        
        if(equals(alphabet,window)){
            return true;
        }
    }
    
    return false;
};*/

/* Time Complexity O(n) , space complexity O(n) */

var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length){
        return false;
    }
    let s1arr=Array(26).fill(0);
    let s2arr=Array(26).fill(0);
    
    for(let i=0;i<s1.length;i++){
        s1arr[s1[i].charCodeAt()-97]++;
        s2arr[s2[i].charCodeAt()-97]++;
    }
    let matches=0;
    for(let i=0;i<26;i++){
        if(s1arr[i]==s2arr[i]){
            matches++;
        }
    }
    let k=0;
    for(let j=s1.length;j<s2.length;j++){
        if(matches==26){
            return true;
        }
        let index=s2[j].charCodeAt()-97;
        s2arr[index]++;
        if(s1arr[index]==s2arr[index]){
            matches++;
        }else if(s1arr[index]+1==s2arr[index]){
            matches--;
        }
        
        index=s2[k].charCodeAt()-97;
        s2arr[index]--;
        if(s1arr[index]==s2arr[index]){
            matches++;
        }else if(s1arr[index]-1==s2arr[index]){
            matches--;
        }
        k++;
    }
    
    return matches==26;
}