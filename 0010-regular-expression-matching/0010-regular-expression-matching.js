/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// Top dowm Memoization , T-O(n*m), S- O(n*m)
var isMatch = function(s, p) {
    let cache ={};
    function dfs(i,j){
        if([i,j] in cache){
            return cache[[i,j]];
        }
        if(i>=s.length && j>=p.length){
            return true;
        }
        if(j>=p.length){
            return false;
        }
        let match = i<s.length && (s[i] ==p[j] || p[j]==".");
        if((j+1)<p.length && p[j+1]=="*"){
            cache[[i,j]]=dfs(i,j+2) || // don't use
            (match &&    dfs(i+1,j)); // use
            return cache[[i,j]];
        }
        if(match){
            cache[[i,j]] = dfs(i+1,j+1);
            return cache[[i,j]];
        }
        cache[[i,j]] = false;
        return false;
    }
    return dfs(0,0);
};