/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let nxt= new ListNode(0);
    let head=nxt;    
    while(list1 && list2){
        if(list1.val<list2.val){
            nxt.next=list1;
            list1=list1.next;
        }else{
            nxt.next=list2;
            list2=list2.next;
        }
        nxt=nxt.next;
    }
    if(list1==null){
        nxt.next=list2;
    }else{
        nxt.next=list1;
    }
    
    return head.next;
};