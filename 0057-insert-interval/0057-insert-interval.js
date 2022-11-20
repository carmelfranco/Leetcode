/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// T- O(n) , S-0 (1)
var insert = function(intervals, newInterval) {
    let result=[];
    for(let i=0;i<intervals.length;i++){
        if(newInterval[1]<intervals[i][0]){ // if the new interval is less than the first interval
            result.push(newInterval);
            return result.concat(intervals.slice(i));
        }else if(newInterval[0]>intervals[i][1]){ // if the new interval is greater than the last interval
            result.push(intervals[i]);
        }else{ // if the new interval is overlapping
            newInterval = [Math.min(intervals[i][0],newInterval[0]),Math.max(intervals[i][1],newInterval[1])];
        }
    }
    result.push(newInterval);
    return result;
};