/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
//T- O(n log n+q log n), S- O(n)
var minInterval = function(intervals, queries) {
    // new queries has sortedqueries with its orginal location[ [int, original index]...]
    var newQueries = queries.map((q, index) => [q, index]);
    newQueries.sort((a, b) => a[0] - b[0]);
    intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    var res = [];
    var i = 0; // pointer
    var minPQ = new MinPriorityQueue();
    
    for (var [q, index] of newQueries) {
        // add possible intervals (start <= q) to min priority queue
        while (i < intervals.length && intervals[i][0] <= q) {
            var [s, e] = intervals[i];
            var size = e - s + 1;
            minPQ.enqueue([size, e], size);
            i++;
        }
        
        // remove elements before q
		// since the queries are sorted, the dequeued items are no longer needed
		// because their ending is smaller than all upcoming queries
        while (minPQ.size() && minPQ.front().element[1] < q) {
            minPQ.dequeue();
        }
		// if min priority queue is not empty, peak[0] will be the size
        var minSize = !minPQ.isEmpty() ? minPQ.front().element[0] : -1;
        // new queries is sorted, so need to push size to the original index of the query
        res[index] = minSize;
    }
    return res;
};