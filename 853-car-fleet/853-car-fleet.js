/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let bucket=[];
    let stack=[];
    for(let i=0;i<position.length;i++){
        bucket.push([position[i],speed[i]]);
    }
    bucket=bucket.sort((a,b)=>(b[0]-a[0]));
    
    for(let i=0;i<bucket.length;i++){
        stack.push((target-bucket[i][0])/bucket[i][1]);
        if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
            stack.pop();
        }    
    }
    return stack.length;
};