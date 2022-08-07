/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Using O(n) space complexity and O(26) space complexity
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
/* Using Map with time Complexity of O(n) and Space complexity of O(n)
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    
    if(s.length!=t.length){
        return false;
    }
    
    for(var i=0;i<s.length;i++){
        if(map1.has(s[i])){
            map1.set(s[i],map1.get(s[i])+1);
        }else{
             map1.set(s[i],1);     
        }
        
        if(map2.has(t[i])){
            map2.set(t[i],map2.get(t[i])+1);
        }else{
             map2.set(t[i],1);     
        }
       
    }
    for(const [key,value] of map1){
        
        if(map2.get(key)!=value){
            return false;
        }
    }
   
    return true;
};


*/
