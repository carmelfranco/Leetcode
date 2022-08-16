/**
 * @param {number[]} height
 * @return {number}
 */

/* Time Complexity O(n*n) , space complexity O(1)
var maxArea = function(height) {
    let area=0;
    let res=0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            area=(j-i)*Math.min(height[i],height[j]);
            
            if(res<area){
                res=area;
            }
        }
    }
    
    return res;
};*/

/* Time complexity O(n) space complexity O(1) */
var maxArea = function(height) {
    let area=0;
    let res=0;
    let i=0;
    let j=height.length-1;
    
    while(i<j){
        area=(j-i)*Math.min(height[i],height[j]);
        if(res<area){
            res=area;
        }
        
        if(height[i]<=height[j]){
            i++
        }else{
            j--;
        }
    }
   
    return res;
};