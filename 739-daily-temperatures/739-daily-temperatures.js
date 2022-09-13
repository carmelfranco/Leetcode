/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack=[];
    let res=Array(temperatures.length).fill(0);
    for(let i=0;i<temperatures.length;i++){
        while(stack.length && stack[stack.length-1].tempr<temperatures[i]){
            let obj=stack.pop();
            res[obj.index]=i-obj.index;
        }
        stack.push({"tempr":temperatures[i],"index":i});
    }
    
    return res;
};