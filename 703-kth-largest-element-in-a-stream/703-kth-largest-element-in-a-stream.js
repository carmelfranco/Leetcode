/**
 * @param {number} k
 * @param {number[]} nums
 */
class PriorityQueue{
    constructor(){
        this.q=[];
        this.len=0;
    }
    get(ind){
        return this.q[ind];
    }
    shift(){
        this.len--;
        if(this.q.length){
            return this.q.shift();
        }
    }
    add(val){
        this.len++;
        this.q.push(val);
        this.q.sort((a,b)=>(a-b));
    }
}
var KthLargest = function(k, nums) {
    
    this.k=k;
    this.pq = new PriorityQueue();
    for(let i=0;i<nums.length;i++){
        this.pq.add(nums[i]);
        if(this.pq.len>k){
            this.pq.shift();
        }
    }    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.pq.add(val);
    if(this.pq.len>this.k){
        this.pq.shift();
        return this.pq.get(0);
    }
    
    return this.pq.get(0);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */