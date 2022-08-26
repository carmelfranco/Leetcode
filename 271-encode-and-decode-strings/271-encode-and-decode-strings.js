/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res="";
    for(s of strs){
        res+=s.length+"#"+s;
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
    let result=[];
    let i=0;
    while(i<s.length){
        let j=i;
        while(s[j]!="#" ){
            j++;
        }
        let len=Number(s.substring(i,j));
        let str=s.substring(j+1,len+j+1);
        result.push(str);
        i=j+1+len;
    }
    
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */