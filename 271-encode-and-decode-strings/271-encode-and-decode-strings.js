/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    var res="";
    for(var i=0;i<strs.length;i++){
        res+=strs[i].length+"#"+strs[i];
    }
    
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    var i=0;
    var res=[];
    while(i<s.length){
        var j=i;
        while(s[j]!="#"){
            j++
        }
        var slen=Number(s.substring(i,j));
        res.push(s.substring(j+1,j+1+slen));
        i=j+1+slen;
    }
    
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */