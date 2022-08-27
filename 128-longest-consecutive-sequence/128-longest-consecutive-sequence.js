/**
 * @param {number[]} nums
 * @return {number}
 */

// O n Log (n), space complexity O(n)
/*var longestConsecutive = function(nums) {
    if(nums.length==0){
        return 0;
    }
    if(nums.length==1){
        return 1;
    }
    nums=nums.sort((a,b)=>(a-b));
    let uniqueints = nums.filter((c, index) => {
    return nums.indexOf(c) === index;
});
    
    if(uniqueints.length==1){
        return 1;
    }
    let longest=0;
    let tcount=1;
    //console.log(nums);
    for(let i=1;i<uniqueints.length;i++){
        if(uniqueints[i]==uniqueints[i-1]+1 ){
            tcount++;
            longest=Math.max(longest,tcount);
        }else{
            tcount=1;
        }
        
        
    }
    if(longest==0){
        return 1;
    }
    return longest;
};*/

var longestConsecutive = function(nums) {
    let set1= new Set(nums);
    let longest=0;
    for( n of nums){
        if(set1.has(n-1)==false){
            let len=0;
            while(set1.has(n+len)){
                len++;
            }
            longest=Math.max(longest,len);
        }
        
    }
    
    return longest;
}