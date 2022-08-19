/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i=0;
    let j=1;
    let maxprofit=0;
    while(j<prices.length){
        if(prices[j]>prices[i]){
            let profit=prices[j]-prices[i];
            maxprofit=Math.max(maxprofit,profit);
        }else{
            i=j;
        }
        j++;
    }
    
    return maxprofit;
};