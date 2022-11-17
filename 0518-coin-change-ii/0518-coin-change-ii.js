/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 // T- O(n), s- O(n)
var change = function(amount, coins) {
    cache ={};
    function dfs(i,a){
        if(a==amount){
            return 1;
        }
        if(a>amount){
            return 0;
        }
        if(i==coins.length){
            return 0;
        }
        if([i,a] in cache){
            return cache[[i,a]];
        }
        cache[[i,a]] = dfs(i,a+coins[i]) + dfs(i+1,a);
        return cache[[i,a]];
    }
    return dfs(0,0);
};