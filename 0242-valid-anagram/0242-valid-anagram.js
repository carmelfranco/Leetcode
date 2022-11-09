/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Using sort method, T- O(n log n), S- O(1)
/*var isAnagram = function(s, t) {
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");
    if(s==t){
        return true;
    }
    return false;
};*/

// Using Arrays T- O(n), s-O(1)
var isAnagram = function(s, t) {
    let arr=Array(26).fill(0);
    if(s.length!=t.length){
        return false;
    }
    for(let i=0;i<s.length;i++){
        arr[s[i].charCodeAt()-97]++;
    }   
    for(let i=0;i<t.length;i++){
        arr[t[i].charCodeAt()-97]--;
    }    
    for(let i=0;i<arr.length;i++){      
       if(arr[i]!=0){
           return false;
       }
    }    
    return true;
}