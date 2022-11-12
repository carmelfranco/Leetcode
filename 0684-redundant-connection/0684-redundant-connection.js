/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent = Array.from(Array(edges.length).keys()); // Initialize the Array with element values filled in sequence , 1..n
    let rank = Array(edges.length).fill(1); // Initialize the Array with filled in 1
    function find(n){ // tarverse to the parent until the parent is self
        let p=parent[n];
        while(p!=parent[p]){
            parent[p]=parent[parent[p]];
            p=parent[p];
        }
        return p;
    }
    function union(n1,n2){ // Merges the two graphs based on rank , if the graph has higher number of nodes, it's rank is higher
        let p1= find(n1), p2=find(n2);
        if(p1==p2){
            return false;
        }
        if(rank[p1]>rank[p2]){
            parent[p2]=p1;
            rank[p1]+=rank[p2];
        }else{
            parent[p1]=p2;
            rank[p2]+=rank[p1];
        }
        return true;
    }
    for(let [n1,n2] of edges){
        if(!union(n1,n2)){
            return [n1,n2];
        }
    }
};