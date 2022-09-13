/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack=[];
    let areamax=0;
    for(let i=0;i<heights.length;i++){
        let start=i;
        while(stack.length && stack[stack.length-1].height>heights[i]){
            let obj=stack.pop();
            areamax=Math.max(areamax,obj.height*(i-obj.index));
            start=obj.index;
        }
        stack.push({"height":heights[i],"index":start});
    }
    
    for(let i=0;i<stack.length;i++){
        let obj=stack[i];
        areamax=Math.max(areamax,obj.height*(heights.length-obj.index));
    }
    
    return areamax;
};