/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Using sort method, T- O(n log n), S- O(1)
var isAnagram = function(s, t) {
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");
    if(s==t){
        return true;
    }
    return false;
};