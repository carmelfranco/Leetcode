/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let s1= new Set(nums);
    let longest =0;
    console.log(s1);
    for(let n of nums){        
        if(s1.has(n-1)==false){
            let len = 0;
            while(s1.has(n+len)){
                
                len+=1;
            }
            longest=longest>len?longest:len;
        }
    }
    
    return longest;
};