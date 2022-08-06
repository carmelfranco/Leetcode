/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
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