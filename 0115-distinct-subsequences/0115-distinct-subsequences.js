/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// T- O(n*m), S- O(n*m)
var numDistinct = function(s, t) {
    let cache={};
    function dfs(i,j){
        if(j==t.length){
            return 1;
        }
        if(i==s.length){
            return 0;
        }
        if([i,j] in cache){
            return cache[[i,j]];
        }
        if(s[i]==t[j]){
            cache[[i,j]]=dfs(i+1,j+1) + dfs(i+1,j);
        }else{
            cache[[i,j]]=dfs(i+1,j);
        }
        return cache[[i,j]];
    }
    return dfs(0,0);
};