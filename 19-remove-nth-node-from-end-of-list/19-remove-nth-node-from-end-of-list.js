/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0,head);// Create the Dummy node to create (n+1)th space
    let left=dummy;
    let right=head; // right points to head but it does not have (n+1)th space compared to left
    
    while(n>0 && right){ // Align the Right n position away from Left
        right=right.next;
        n--;
    }
    while(right){ // Move left and right until right meets the end of the list
        left=left.next;
        right=right.next;
    }
    // Left pointer is at (n-1) th position
    left.next = left.next.next; // deletes the nth Node
    
    return dummy.next; // returns the actual head
    
};