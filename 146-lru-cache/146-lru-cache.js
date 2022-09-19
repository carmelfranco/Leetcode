/**
 * @param {number} capacity
 */
var DNode=function(key,val){
    this.val=val;
    this.key = key;
    this.next = null;
    this.prev=null;
}
var LRUCache = function(capacity) {
    this.capacity=capacity;
    this.map =  new Map();
    this.head=null;
    this.tail=null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype._unlink = function(node) {
    if(node.prev){
        node.prev.next=node.next;
    }else{
        this.head=node.next;
    }
    if(node.next){
        node.next.prev=node.prev;
    }else{
        this.tail = node.prev;
    }
};

LRUCache.prototype._setHead = function(node) {
    node.next = this.head;
    node.prev = null;
    if(this.head!==null){
        this.head.prev=node;
    }
    this.head = node;
    if(this.tail===null){
        this.tail=this.head;
    }
};

LRUCache.prototype.get = function(key) {
     if (this.map.has(key)) {
            const node = this.map.get(key);
            this._unlink(node);
            this._setHead(node);
            return node.val;
        }
        return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        const node = this.map.get(key);
        node.val=value;
        this._unlink(node);
        this._setHead(node);
    }else{
        const created = new DNode(key,value);
        if(this.map.size >= this.capacity ){
            this.map.delete(this.tail.key);
            this._unlink(this.tail);
            
        }
        this._setHead(created);
        this.map.set(key,created);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */