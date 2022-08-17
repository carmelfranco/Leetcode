/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res="";
    for(let i=0;i<strs.length;i++){
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
    let i=0;
    let result=[];
    while(i<s.length){
        let j=i;
        while(s[j]!="#"){
            j++;
        }
        let slen=Number(s.substring(i,j));
        result.push(s.substring(j+1,j+1+slen));
        i=j+1+slen;
    }
    
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */