/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // Find middle element in the List
    let slow=head, fast=head.next;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    // Reverse the second half
    let prev=null, second=slow.next;
    slow.next=null;
    while(second){
        let tmp=second.next;
        second.next=prev;
        prev=second;
        second=tmp;
    }
    
    // Merge two part of the Arrays
    let first=head;
    second=prev;
    while(second){
        let tmp1=first.next;
        let tmp2=second.next;
        first.next=second;
        second.next=tmp1;
        first=tmp1;
        second=tmp2;
    }
};