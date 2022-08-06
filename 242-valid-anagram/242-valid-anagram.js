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
        //console.log(" s[i]"+s[i]);
        alphabet[s[i].charCodeAt()-97]+=1;
       // console.log(" alphabet[s[i]] "+alphabet[s[i].charCodeAt()-97]);
        alphabet[t[i].charCodeAt()-97]-=1;
       // console.log(" alphabet[t[i]] "+alphabet[t[i].charCodeAt()-97]);
    }
    
    for( var i=0;i<26;i++){
        if(alphabet[i]!=0){
            return false;
        }
    }
    
    return true;
};