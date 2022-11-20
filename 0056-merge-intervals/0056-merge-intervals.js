/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// T- O(n log n), S- O(1)
var merge = function(intervals) {
    let result=[];
    intervals.sort((a,b)=>(a[0]-b[0]));
    result.push(intervals[0]);
    for(let i=1;i<intervals.length;i++){
        let [start,end] = intervals[i];
        let lastEnd = result[result.length-1][1];
        if(start<=lastEnd){
            result[result.length-1][1] = Math.max(lastEnd,end);
        }else{
            result.push([start,end]);
        }
    }
    return result;
};