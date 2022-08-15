/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/* Time Complexity O(n*n) and space complexity O(1) */
var twoSum = function(numbers, target) {
    
 let i=0;
 let j=numbers.length-1;
    
 while(i<j){
    if(numbers[i]+numbers[j]<target){
        i++;
    }else if(numbers[i]+numbers[j]>target){
        j--;
    }else{
        return [i+1,j+1];
    }
 }
    return [];
};