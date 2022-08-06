/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {   
    
    const alphabet = Array(26).fill(0);
    
    if(s.length!=t.length){
        return false;
    }
    for(var i=0;i<s.length;i++){        
        alphabet[s[i].charCodeAt()-97]+=1;     
        alphabet[t[i].charCodeAt()-97]-=1;       
    }
    
    for( var i=0;i<26;i++){
        if(alphabet[i]!=0){
            return false;
        }
    }
    
    return true;
};