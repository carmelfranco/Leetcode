/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxleft=Array(height.length);
    let maxright=Array(height.length);
    let minarr=Array(height.length);
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
};