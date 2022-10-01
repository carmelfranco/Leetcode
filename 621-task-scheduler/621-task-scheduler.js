/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const newMap = tasks.reduce((map,obj)=>{ // Build the map of the task Array
        map[obj] =  map[obj]+1 || 1;
        return map;
    },{});
    const array = Object.values(newMap); // get the values of the map as array
    const maxRows = Math.max(...array); // find the maximum value in the array
    const lastRowLen = array.filter(x=>x===maxRows).length; // get the Maximum values length
    // if the task array is empty return 0, otherwise return (TotalRows -1)*(n+1)+LastRowLen
    return Math.max(tasks.length,(maxRows-1)*(n+1)+lastRowLen);
};