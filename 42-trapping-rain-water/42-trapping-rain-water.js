/**
 * @param {number[]} height
 * @return {number}
 */
/* Time Complexity O(n) , Space Complexity O(n) 
var trap = function(height) {
    let maxleft=Array(height.length);
    let maxright=Array(height.length);    
    let res=0;
    maxleft[0]=height[0];
    for(let i=1;i<height.length;i++){
        maxleft[i]=Math.max(height[i],maxleft[i-1]);
    }
    maxright[height.length-1] = height[height.length-1];
    for(let i=height.length-2;i>=0;i--){
        maxright[i]=Math.max(height[i],maxright[i+1]);
    }
    for(let i=0;i<height.length;i++){
        res+=Math.min(maxleft[i],maxright[i])-height[i];
    }
    
    return res;
};*/

var trap = function(height) {
    let leftmax=height[0];
    let rightmax=height[height.length-1];
    let i=0;
    let j=height.length-1;
    let res=0;
    
    while(i<j){
        if(leftmax<=rightmax){
            i++;
            leftmax=Math.max(leftmax,height[i]);
            res+=leftmax-height[i];
        }else{
            j--;
            rightmax=Math.max(rightmax,height[j]);
            res+=rightmax-height[j];
        }
    }
    
    return res;
}
