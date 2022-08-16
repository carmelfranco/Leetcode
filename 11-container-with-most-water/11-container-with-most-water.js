/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area=0;    
    let res=0;
    let i=0;
    let j=height.length-1;
    while(i<j){
        area=Math.min(height[i],height[j])*(j-i);
        if(res<area){
            res=area;
        }
        if(height[i]<=height[j]){
            i++;
        }else{
            j--;
        }
    }
    
    
    
    return res;
};