
var TimeMap = function() {
    this.objectstore={};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.objectstore[key]===undefined || this.objectstore==null){
        this.objectstore[key]=[];
    }
    this.objectstore[key].push([value,timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let values=this.objectstore[key]===undefined?[]:this.objectstore[key];
    let i=0;j=values.length-1, res="";
    
    while(i<=j){
        let mid=Math.trunc((i+j)/2);
        if(values && values[mid][1]<=timestamp){
            i=mid+1;
            res=values[mid][0];
        }else{
            j=mid-1;
        }
    }
    
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */