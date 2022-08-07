/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map1= new Map();
    if(strs.length==0){
        return [[""]];
    }else if(strs.length==1){
        return [[strs[0]]];
    }    
    for(var i=0;i<strs.length;i++){              
        var sorted_text=strs[i].split("").sort().join("");       
        if(map1.has( sorted_text)){
            var trr=map1.get(sorted_text).toString().split(",");            
            trr.push(strs[i]);
            map1.set(sorted_text,trr);
        }else{
            var trr=[];
            trr.push(strs[i]);
            map1.set(sorted_text,trr);
        }
    }
    var result=[];
    for(const [key,value] of map1){
        result.push(value);
    }
    
    return result;
};