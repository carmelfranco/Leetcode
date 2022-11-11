/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let preMap = {}, visited ={};
    // build adjacency List
    for(let i=0;i<prerequisites.length;i++){
        if(preMap[prerequisites[i][0]]===undefined){
            preMap[prerequisites[i][0]]=[prerequisites[i][1]];
        }else{
            preMap[prerequisites[i][0]].push(prerequisites[i][1]);
        }
    }
    const dfs=(node)=>{
        if(visited[node]){
            return false;
        }
        if(preMap[node]!==undefined){
            if(preMap[node].length===0){
                return true;
            }        
            visited[node]=true;
            for(let val of preMap[node]){
                if(!dfs(val)){
                    return false;
                }
            }
            visited[node]=false;
            preMap[node]=[];
        }
        return true;
    }
    for(let key in preMap){
        if(!dfs(key)){
            return false;
        }
    }
    return true;
};