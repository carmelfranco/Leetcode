/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
// T- O(n*groupsize), S- O(n)
var isNStraightHand = function(hand, groupSize) {
    const n = hand.length;
    const map = new Map();
    
    hand.sort((a, b) => a - b);
    
    for (let i = 0; i < n; i++) {
        const num = hand[i];
        
        if (!map.has(num)) map.set(num, 0);
        map.set(num, map.get(num) + 1);
    }
    
    for (const [num, freq] of map) {
        for (let i = 1; i < groupSize; i++) {
            const nextNum = num + i;
            
            if (!map.has(nextNum)) return false;
            
            const nextFreq = map.get(nextNum);
            
            if (nextFreq < freq) return false;
            
            map.set(nextNum, map.get(nextNum) - freq);
            
            if (map.get(nextNum) === 0) map.delete(nextNum);
        }
        
        map.delete(num);
    }
   
    return map.size === 0;
};