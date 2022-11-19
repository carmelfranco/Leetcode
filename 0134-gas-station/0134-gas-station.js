/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// T- O(n), S- O(1)
var canCompleteCircuit = function(gas, cost) {
    let sumgas = gas.reduce((a,b)=>a+b,0);
    let sumcost = cost.reduce((a,b)=>a+b,0);
    if(sumgas<sumcost){
        return -1;
    }
    let [total, start] =[0,0];
    for(let i=0;i<gas.length;i++){
        total +=gas[i] - cost[i];
        if(total<0){
            total=0;
            start=i+1;
        }
    }
    return start;
};