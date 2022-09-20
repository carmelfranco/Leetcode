/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy=new ListNode(0,head);
    let groupprev=dummy;
    while(1){
        let kth=getKth(groupprev,k);
        if(!kth){
            break;
        }
        let groupnext=kth.next;
        // logic to reverse
        let prev=groupnext, curr = groupprev.next;
        while(curr!=groupnext){
            let tmp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=tmp;
        }
        tmp=groupprev.next;
        groupprev.next=kth;
        groupprev=tmp;
    }
    
    return dummy.next;
};

var getKth=function(curr,k){
    while(curr && k>0){
        curr=curr.next;
        k--;
    }
    return curr;
}