/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let graph={};
    for(let i=0;i<numCourses;i++){
        graph[i]=[];
    }
    for(let [i,j] of prerequisites){
        graph[j].push(i);
    }
    let cycle= new Set(), seen = new Set(), stack=[];
    for(let i=0;i<numCourses;i++){
        if(dfs(i)=='cycle'){
            return [];
        }
    }
    return stack.reverse();
    function dfs(i){
        if(cycle.has(i)) return 'cycle';
        if(seen.has(i)) return;
        seen.add(i);
        cycle.add(i);
        
        for(let prereq of graph[i]){
            if(dfs(prereq)=='cycle') return 'cycle';
        }
        cycle.delete(i); // backtracking
        stack.push(i);
    }
};