/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
// T- O(E+V), S- O(E+V)
var validTree = function(n, edges) {
    if(!n){
        return true;
    }
    let adjacency_list ={};
    for(let i=0;i<n;i++){
        adjacency_list[i]=[];
    }
    for(let[n1,n2] of edges){
       adjacency_list[n1].push(n2);
       adjacency_list[n2].push(n1);
    }
    let visit = new Set();
    function dfs(i,prev){
        if(visit.has(i)){            
            return false;
        }
        visit.add(i);
        for(let j of adjacency_list[i]){
            if(j==prev){
                continue;
            }
            if(!dfs(j,i)){
                return false;
            }
        }
        return true;
    }   
    return dfs(0,-1) && n==visit.size;
};