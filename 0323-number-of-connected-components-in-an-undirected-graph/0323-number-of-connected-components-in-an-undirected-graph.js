/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let parent = Array.from(Array(n).keys());
    let rank = Array(n).fill(1);
    
    function find(n1){
        let p=n1;
        while(p!=parent[p]){
            parent[p] = parent[parent[p]];
            p = parent[p];
        }
        return p;
    }
    function union(n1,n2){
        let p1 = find(n1), p2 = find(n2);
        if(p1==p2){
            return 0;
        }
        if(rank[p2]>rank[p1]){
            parent[p1] = p2;
            rank[p2]+=rank[p1];
        }else{
            parent[p2]=p1;
            rank[p1]+=rank[p2];
        }
        return 1;
    }
    let result=n;
    for(let[n1,n2] of edges){
        result-=union(n1,n2);
    }
    return result;
};