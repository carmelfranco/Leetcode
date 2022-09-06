/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack=[[]];// Index, Height pair
    let areamax=0;
    for(let i=0;i<heights.length;i++){
        let start=i;
        while(stack.length && stack[stack.length-1][1]>heights[i]){
            let arr=stack.pop();
            areamax=Math.max(areamax,arr[1]*(i-arr[0]));
            start=arr[0];
        }
        stack.push([start,heights[i]]);
    }
    for(let i=0;i<stack.length;i++){
        let arr=stack[i];
        areamax=Math.max(areamax,arr[1]*(heights.length-arr[0])||0);        
    }
    
    return areamax;
};