/**
 * @param {number[][]} intervals
 * @return {number}
 */
// T- O(n log n), S- O(1)
var minMeetingRooms = function(intervals) {   
    // Sort by start time
    let start = intervals.sort((a,b)=>(a[0]-b[0]));
    // Create a copy and sort by end time
    let end = [...intervals].sort((a,b)=>(a[1]-b[1]));
    // Keep track of Rooms
    let rooms=0;
    // Two pointers incoming
    let j=0;
    for(let i=0;i<intervals.length;i++){
        // Whenever there is a start meeting, we need to add one room
        // before adding rooms, we check to see if any previous meeting ends, this is why we check the start with first end
        if(start[i][0]<end[j][1]){
            rooms++;
        }
        // When the start is bigger than the end, it means previous meeting has end, it means we can re-use the same meeting room
        else{
            j++;
        }
    }
    
    return rooms;
};