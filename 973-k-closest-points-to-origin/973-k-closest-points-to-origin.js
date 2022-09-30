/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// Time Complexity O(n log n), Space complexity O(n)
var kClosest = function(points, k) {
    let arr=[];
    for(let i=0;i<points.length;i++){
        let px=points[i][0], py = points[i][1];
        arr.push([(px*px)+(py*py),i]);
    }
    arr.sort((a,b)=>a[0]-b[0]);
    let result=[];
    for(let i=0;i<k;i++){
        result.push(points[arr[i][1]]);
    }
    
    return result;
};