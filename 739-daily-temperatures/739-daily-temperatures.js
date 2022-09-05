/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res=Array(temperatures.length).fill(0);
    let stack=[[]];
    
    for(let i=0;i<temperatures.length;i++){
        while(stack.length && temperatures[i]>stack[stack.length-1][0]){
            let arr=stack.pop();
            res[arr[1]]=(i-arr[1]);
        }
        stack.push([temperatures[i],i]);
    }
    return res;
};