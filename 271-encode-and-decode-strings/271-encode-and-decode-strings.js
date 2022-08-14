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
    var res=[];
    while(i<s.length){
        let j=i;
        while(s[j]!="#"){
            j++;
        }
        let slen=Number(s.substring(i,j));
        res.push(s.substring(j+1,slen+j+1));
        i=slen+j+1;
    }
    
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */