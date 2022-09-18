/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time Complexity O(n), space complexity O(n)
var hasCycle = function(head) {
    let map1= new Map();
    while(head){
        if(map1.has(head)){
            return true;
        }
        map1.set(head,head.val);
        head=head.next;
    }
    
    return false;
};