/**
 * @param {number[]} stones
 * @return {number}
 */
class PriorityQueue{ //Create Priority Queue class
    constructor(){ 
        this.len=0;
        this.q=[];
    }
    add(val){ // logic to add Max Queue
        this.q.push(val);
        this.q.sort((a,b)=>(b-a));
        this.len++;
    }
    shift(){ // Remove the Top element and return
        this.len--;
        return this.q.shift();
    }
    
}
var lastStoneWeight = function(stones) {
    if(stones.length==0) return 0; // if there are no stones, return 0
    if(stones.length==1) return stones[0]; //  if Only 1 stone, return that stone
    let pq= new PriorityQueue(); //  Initialize Max Priority Queue
    for(let i=0;i<stones.length;i++){ // Add elements to PQ
        pq.add(stones[i]);
    }
    while(pq.len>1){ 
        let ele1=pq.shift(); //  Add first element
        let ele2=pq.shift(); // Add second element
        
        if(ele1-ele2!=0) pq.add(Math.abs(ele1-ele2)); // if there are any different values, then return the Abs difference
    }
    
    return pq.len==0?0:pq.shift();// if there are no elements, return 0, otherwise return the top element
};