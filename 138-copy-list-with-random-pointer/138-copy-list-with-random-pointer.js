/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// Time Compelxity O(n), space compelxity O(n)
var copyRandomList = function(head) {
    let curr=head;
    let map1= new Map();
    map1.set(null,null);
    while(curr){
        let newcurr=new Node(curr.val);
        map1.set(curr,newcurr);
        curr=curr.next;
    }
    curr=head;
    while(curr){
        let newcurr=map1.get(curr);
        newcurr.next=map1.get(curr.next);
        newcurr.random=map1.get(curr.random);
        curr=curr.next;
    }
    
    return map1.get(head);
};