/**
 * @param {number[][]} intervals
 * @return {number}
 */
// T- O(n log n), S- O(1)
var eraseOverlapIntervals = function(intervals) {
    let result=0;
    intervals.sort((a,b)=>(a[0]-b[0]));
    let prevEnd = intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        let [start,end] = intervals[i];
        if(start>=prevEnd){ // Check if the current start is Greater than the previous end
            prevEnd = end;
        }else{ // we need increment the count and update previous end
            result++;
            prevEnd = Math.min(prevEnd,end);
        }
    }
    return result;
};