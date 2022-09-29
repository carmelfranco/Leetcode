/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k=k;
    this.list=[];
    
    nums.sort((a,b)=>(a-b));
    this.list=nums;
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.list.push(val);
    this.list.sort((a,b)=>(a-b));
    let k=this.k;
    if(k<1) k=1;
    return this.list[this.list.length-k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */