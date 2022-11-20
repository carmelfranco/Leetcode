/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// T- O(log n), S- O(1)
var canAttendMeetings = function(intervals) {  
    if(intervals.length==0) return true;
    intervals.sort((a,b)=>(a[0]-b[0]));    
    let prevEnd =intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        let [start,end] = intervals[i];
        if(start>=prevEnd){
            prevEnd = end;
        }else{
            return false;
        }
    }
    return true;
};