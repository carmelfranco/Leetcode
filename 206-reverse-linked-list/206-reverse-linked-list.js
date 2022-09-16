/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time Complexity O(n), space complexity O(1)
/*var reverseList = function(head) {
    let prev=null, curr=head;
    while(curr){
        let nxt=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nxt;
    }
    
    return prev;
};*/
// Reverse List
var reverseList = function(head) {

    if(!head){
        return null;
    }
    
    let newhead=head;
    if(head.next){
        newhead=reverseList(head.next);
        head.next.next=head;
    }
    head.next=null;
    
    return newhead;
}